let num1 = prompt("Enter the first number");
let num2 = prompt("Enter the second number");
let a = Number(num1);
let b = Number(num2);
let x = Math.abs(a-100);
let y = Math.abs(b-100);
 
if(x>y){
    alert(`${num2} is closer to 100 than ${num1}`);
}
else if(y>x){
    alert(`${num1} is closer to 100 than ${num2}`);
}
else if(y == x){
    alert(`${num1} and ${num2} and They are both equally close to 100`);
}
else{
    alert("Invalid input");
}