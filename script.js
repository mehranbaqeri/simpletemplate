const person = { name: "mehran", age: 33, city: "behshahr" };
for (let key in person) {
  console.log(key);
}
const color = ["red", "blue", "green"];
for (const iterator of color) {
  console.log(iterator);
}
let circle = {
  radius: 1,
  location: { x: 0, y: 0 },
  draw() {
    console.log("drawing circle");
  },
};
//factory function
function createCircle(radius1) {
  return {
    radius1,
    draw() {
      console.log("drawing circle");
    },
  };
}
let circle1 = createCircle(25);
console.log(circle1);
//constructor function
function CircleMaker(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("drawing circle2");
  };
}
const circle3 = new CircleMaker(12);
console.log(circle3);
