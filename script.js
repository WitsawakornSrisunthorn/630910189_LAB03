var A=0;
 
function Add() {
 
console.log(A);
 
A=A+1;
 
if (A>10) {
 
    A=10;
 
}
 
}
 
const buttonAdd = document.querySelector('#Add');
 
buttonAdd.addEventListener('click',Add);
 
 
 
function Minus() {
 
    console.log(A);
 
    A=A-1;
 
    if (A<0) {
 
        A=0;
 
    }
 
    }
 
    const buttonMinus = document.querySelector('#Minus');
 
    buttonMinus.addEventListener('click',Minus);