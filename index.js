function setup() {
    createCanvas(600, 400);
    angleMode(DEGREES);
}
function draw() {
    background(0);

    push();
    translate(width / 2, height / 2);
    stroke(255);
    rotate(PI / 3.0);
    rect(-26, -26, 52, 52);
    pop();
}

let arr1 = [];
let arr2 = [];
for (let i = 1; i < 20; i++) {
    arr1.push({
        id: i,
        text: `test${i}`
    })
};
for (let j = 20; j < 26; j++) {
    arr2.push({
        id: j,
        text: `test${j}`
    })
};
console.log(arr1);
console.log(arr2);
let arr3 = arr1.concat(arr2);
console.log(arr3);
console.log(arr3.find((obj) => obj.id = 15));
let arr4 = arr3.filter((obj) => obj.id < 5);
console.log(arr4);
let arr5 = arr3.shift();
console.log(arr5);
let arr6 = arr3.pop();
console.log(arr6);
console.log(arr3);
let arr7 = arr3.splice(5, 16);
console.log(arr7);
console.log(arr3);
let arr9 = arr7.map((obj) => (obj.text));
let arr10 = arr3.map((obj) => (obj.id));
console.trace(arr9.join(', '));
let reducer = (acc, curr) => { return acc + curr };
console.log(arr10);
console.log(Array.from(arr10, x => x + x));
let arr11 = arr3.splice(0, 1, { id: 55, text: 'new Object' });
console.log(arr3);
console.log(arr10.reduce(reducer));
console.log(arr10.some((elt) => { return typeof elt === 'number' }));
console.log(arr10.some((elt) => { return elt % 2 === 0 /** even number */ }));

function func(a) {
    var b = 15;
    return a + b + 5;
}
function func1(c) {
    var d = 3;
    return func(c * d)
}
console.log(func1(5))
let time = () => console.log(new Date().toISOString('de-DE'));
let k = 1000;
let start = setInterval(time, k);
if(k > 5){
    clearInterval(start)
}
// let inter = 
// let stop = setTimeout(clearInterval(inter), 5000)


