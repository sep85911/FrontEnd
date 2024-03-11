const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const birdImg = new Image();
birdImg.src = './assets/FBirds/bird.png';

const pipeNorthImg = new Image();
pipeNorthImg.src = './assets/FBirds/pipeNorth.png';

const pipeSouthImg = new Image();
pipeSouthImg.src = './assets/FBirds/pipeSouth.png';

const backgroundImg = new Image();
backgroundImg.src = './assets/FBirds/bg.png';

const bird = {
    x: 50,
    y: canvas.height / 2 - 25,
    radius: 20,
    velocity: 0,
    gravity: 0.5,
    jumpStrength: 10,
};

let obstacles = [];
let backgroundX = 0; // 用于记录背景图的X坐标

function spawnObstacle() {
    const gapHeight = 200; // 调整缝隙的高度
    const minHeight = 20;
    const maxHeight = canvas.height - gapHeight - minHeight;

    const pipeHeight = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
    const obstacle = {
        x: canvas.width,
        yTop: 0,
        heightTop: pipeHeight,
        yBottom: pipeHeight + gapHeight,
        heightBottom: canvas.height - (pipeHeight + gapHeight),
        width: 50, // 调整管道的宽度
    };

    obstacles.push(obstacle);
}

function drawBackground() {
    ctx.drawImage(backgroundImg, backgroundX, 0, canvas.width, canvas.height);
    ctx.drawImage(backgroundImg, backgroundX + canvas.width, 0, canvas.width, canvas.height);
}

function updateBackground() {
    const speed = 1; // 背景滚动速度
    backgroundX -= speed;
    
    // 循环背景图
    if (backgroundX <= -canvas.width) {
        backgroundX = 0;
    }
}

function drawObstacles() {
    obstacles.forEach(obstacle => {
        ctx.drawImage(pipeNorthImg, obstacle.x, obstacle.yTop, obstacle.width, obstacle.heightTop);
        ctx.drawImage(pipeSouthImg, obstacle.x, obstacle.yBottom, obstacle.width, obstacle.heightBottom);
    });
}

function updateObstacles() {
    obstacles.forEach(obstacle => {
        obstacle.x -= 2; // 调整管道的移动速度
    });

    // 移除超出屏幕的障碍物
    obstacles = obstacles.filter(obstacle => obstacle.x + obstacle.width > 0);

    // 检查是否需要生成新的障碍物
    if (obstacles.length === 0 || obstacles[obstacles.length - 1].x + 400 < canvas.width) {
        spawnObstacle();
    }
}

function drawBird() {
    ctx.drawImage(birdImg, bird.x - bird.radius, bird.y - bird.radius, bird.radius * 2, bird.radius * 2);
}

function checkCollision() {
    for (let i = 0; i < obstacles.length; i++) {
        const obstacle = obstacles[i];

        if (
            bird.x + bird.radius > obstacle.x &&
            bird.x - bird.radius < obstacle.x + obstacle.width &&
            (bird.y - bird.radius < obstacle.yTop || bird.y + bird.radius > obstacle.yBottom)
        ) {
            return true; // 碰撞检测到
        }
    }

    return false; // 没有碰撞
}

function updateBird() {
    bird.velocity += bird.gravity;
    bird.y += bird.velocity;

    // 如果小鸟碰到屏幕上下边缘或和管道碰撞，立即结束游戏
    if (bird.y - bird.radius < 0 || bird.y + bird.radius > canvas.height || checkCollision()) {
        gameOver();
    }
}

function gameOver()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.font = '30px Arial';
    ctx.fillText('Game Over', canvas.width / 2 - 80, canvas.height / 2);
    obstacles = []; // 停止显示管道
    // 取消游戏循环
    cancelAnimationFrame(gameLoop);
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    updateBackground();
    drawBackground();
    updateObstacles();
    drawObstacles();
    updateBird();
    drawBird();

    requestAnimationFrame(gameLoop);
}

function flap() {
    bird.velocity = -bird.jumpStrength;
}

document.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
        flap();
    }
});

// 确保在所有图片资源加载完成后开始游戏循环
Promise.all([birdImg, pipeNorthImg, pipeSouthImg, backgroundImg].map(img => new Promise((resolve, reject) => {
    img.onload = resolve;
    img.onerror = reject;
})))
.then(() => {
    spawnObstacle(); // 初始化一个障碍物
    gameLoop();
})
.catch((error) => {
    console.error('Error loading images:', error);
});