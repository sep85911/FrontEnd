function Person(id, name) {
    this.id = id;
    this.name = name;
}

Person.prototype.say = function(){
    console.log("My name is " + this.name);
}

var p1 = new Person(1,"tangyao");
var p2 = new Person(2,"Chenjing");

p1.say();
p2.say();

console.log("yes")

console.log("yes");
