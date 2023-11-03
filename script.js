const myBox = document.querySelector(".box");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const answer1 = document.querySelector("#p1");
const answer2 = document.getElementById("p2");


myBox.addEventListener('click', () => {
myBox.style.borderRadius = "240px";
myBox.style.background = "teal";
myBox.style.border = "3px solid pink";

});

btn1.addEventListener('click', () => {
answer1.style.visibility = "visible";
answer1.style.background = "red";
});

btn2.addEventListener('click', () => {
answer2.style.visibility = "visible";
answer2.style.background = "green";
});

//----------------------------------------------------------------------