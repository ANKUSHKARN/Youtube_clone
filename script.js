console.log("Script start");

var menuIcon = document.querySelector(".ham");
var sidebar = document.querySelector(".sidebar");
var mainContainer = document.querySelector(".mainContainer");

menuIcon.onclick = function () {
  sidebar.classList.toggle("smaller-sidebar");
  mainContainer.classList.toggle("larger-maincontainer");

  console.log("menu item clicked");
};

// New code for adding comments and updating the comment count
var commentInput = document.querySelector('.writeCommentContainer input');
var previousCommentContainer = document.querySelector('.previousCommentContainer');
var commentCountElement = document.querySelector('.commentContainer h2');

commentInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter' && commentInput.value.trim() !== '') {
    var newComment = document.createElement('div');
    newComment.classList.add('previousComments');

    newComment.innerHTML = `
      <img src="images/images/profile_icon.png" alt="" width="40px" />
      <div class="nameandComment">
        <p>@YourUsername</p>
        <p class="comment">${commentInput.value}</p>
      </div>
    `;

    previousCommentContainer.appendChild(newComment);

    // Update the comment count dynamically
    var currentCount = previousCommentContainer.children.length;
    commentCountElement.textContent = `${currentCount} Comments`;

    commentInput.value = ''; // Clear the input field
  }
});



// var gv = "global";
// console.log(gv);
// function abc() {
//   var lv = "local";
//   console.log(lv);
// }
// abc();

// function a() {
//   var q = 354;
//   var q = 34;
//   console.log(q);
//   //redeclaration is allowed in var
// }
// a();

// //reassignment in var
// function xyz() {
//   var e = 87;
//   e = 9;
//   //reassignment is allowed in var
//   console.log(e);
// }

// //Hoisting
// //a varible can be used before declare
// // declaration moves on top

// function H() {
//   console.log("Before declaration: ", v);
//   var v = 45;
//   console.log("after declaration: ", v);
// }
// H();
// //hoisting is allowed

// //Let
// //Scope declaration
// let gLet = "it is global";
// console.log(gLet);
// //local declaration
// function x() {
//   let lLet = "local";
//   console.log(lLet);
// }
// x();

// //redeclaration by let

// function redecByLet() {
//   let z = 30;
//   // let z = 55; //redeclaration is not allowed in let
//   console.log(z);
// }
// redecByLet();

// //reassignment by let

// function reassgnByLet() {
//   let y = 20;
//   y = 98;
//   console.log(y); // reassignment is allowed
// }
// reassgnByLet();

// //hoisting by let
// function Hois() {
//   console.log("before declaration : ", m);
//   let m = 78;
//   console.log("after declaration : ", m);

//   //hoisting is not allowed
// }
// Hois();

// //const declaration
// //scope declaration
// const globalCOnst = "global";
// console.log(globalCOnst);

// //local declaration
// function adj() {
//   const a = "local";
//   console.log(a);
// }
// adj();
// //redeclaration by const

// function G() {
//   const b = 10;
//   // const b = 45; // redeclaration is not allowed in const
//   console.log(b);
// }

// //reassignment by const

// function D() {
//   const k = 4;
//   k = 6;
//   console.log(k); //reassignment is not allowed
// }
// D();

// //hoisiting by const

// function cHois(){
//   console.log("before declaration : ", p);
//   const p = 78;
//   console.log("after declaration : ", p);
// }

// // hoisting not allowed

//functions

//simple function

// function hello() {
//   console.log("Hello");
// }
// hello();

// //function with loop, parameter
// // function printNumber(n) {
// //   for (let i = 0; i < navigator; i++) {
// //     console.log(i);
// //   }
// // }
// // printNumber(5);

// //function with multi paramaters
// function add(a, b) {
//   let sum = a + b;
//   console.log(sum);
// }
// add(4, 5);

// //function with return

// function square(number) {
//   return number * number;
// }
// const result = square(6);
// console.log(result);

// //arrow functions

// //arrow function with no input arguement

// const greet = () => {
//   console.log("hello world");
// };
// greet();

// //arrow function with single input arguement
// const s = (x) => x * x;
// console.log(s(6));

// //arrow function with single line function body
// const addition = (a, b) => a + b;
// console.log(addition(4, 6));

// //arrow function with single expression broken over multiple line
// const message = (name, age) => {
//   `Hello,${name}
// you are ${age} years old`;
// };
// console.log(message("alice", 25));

//object liters return value

// const createPerson = ({ name, age }) => ({
//   name: name,
//   age: age
// });
// const person = createPerson({name: 'rahul', age:24});
// console.log(person);

//return key

// return {
//   name: name,
//   age: age,
// };

// "use strict";
//globally
//window obj for browser
// console.log(this);

//this key within the function

// function a(){
// console.log(this);
// }
// a();

//in script mode
// non deleted, read only
// a();
// the value of this also depends on strict mode
//also depends on how tge function is in called
// a(); //in strict mode -> undefined
// if it is in non strict mode it will give window object
// this keyword is behaved like global obj
// window.a();