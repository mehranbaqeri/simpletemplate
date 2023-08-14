const person = {name:"mehran",age:33 , city:"behshahr"};
for (let key in person) {
   console.log(key);
}
const color=["red","blue","green"];
for (const iterator of color) {
console.log(iterator);
}
let circle={
    radius:1,location:{x:0,y:0},
    draw(){
        console.log("drawing circle");
    }
}
circle.draw();
