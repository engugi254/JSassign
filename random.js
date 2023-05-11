const compChoice = '';
const myChoice = '';
let times = 1;
 
do {
    const compChoice = parseInt(Math.floor(Math.random()*10+1));
    const myChoice = prompt("Enter a number from 1 to 10:");

    const a = parseInt(myChoice);

    
    if(a > 10 || a < 1){
        alert("Pick a Number between 1 and 10!");   
    } 
    else if(typeof Number(myChoice) != 'number'){
        alert("You have not entered a Number"); 
        continue;
    } 
    else if(myChoice == ''){
        alert("You have not entered anything. Try Again"); 
        continue;
    } 
   else{
        if (compChoice == myChoice){
            alert(`Good Work. The computer also chose ${compChoice}. Got it right after ${times} attempts`);
            break;
        }
        else{
            alert(`Not matched. Computer Choice was ${compChoice}. Try Again!`);
            times++;
            if(times === 4){
                alert("You have exhausted all your attempts. GoodBye!");
                break;
            }
        }
    }
    continue;
    
    
} while (true);  

    
    