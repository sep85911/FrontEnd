const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5500; // 指定端口号

// 设置解析请求体的中间件
app.use(bodyParser.json());

// 用于存储玩家分数的数组
let leaderboard = [];

// 添加分数到排行榜
app.post('/addScore', (req, res) => {
    const { score } = req.body;
    leaderboard.push(score);
    leaderboard.sort((a, b) => b - a); // 按降序排列
    console.log("Updated leaderboard:", leaderboard);
    res.sendStatus(200);
});

// 获取排行榜数据
app.get('/leaderboard', (req, res) => {
    res.json(leaderboard);
});

// 监听端口号，启动服务器
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});