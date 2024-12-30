//selecting buttons and output section//
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const output = document.getElementById('output');

//function to check prime number//
const isPrime = () =>{
    const userInput = document.getElementById('number').value;
    const toNumber = Math.floor(parseInt(userInput,10));
       if(isNaN(toNumber)){   //if the input is not a number//
            output.textContent = 'Please enter a valid number';
            output.style.backgroundColor ="white";
            output.style.color ="red";
            //for automatically deleting output after some time//
            setTimeout(() =>{
                output.textContent = '';
            }, 5000);
           return;
       }else if(toNumber <= 1){  //number less than 1 is not a prime number//
            output.textContent = 'Enter a number greater than 1';
            output.style.backgroundColor ="white";
            output.style.color ="red";
            //for automatically deleting output after some time//
            setTimeout(() =>{
                output.textContent = '';
            }, 5000);
            return;
       } 
       //for loop for checking if the number is divisible by any number between 1 and that number//
       for(let i = 2; i < toNumber; i++){
           if(toNumber % i === 0){
               output.textContent = `${toNumber} is not a prime number`;
               //for automatically deleting output after some time//
               setTimeout(()=>{
                     output.textContent = '';
               },5000);
               return;
           }
       }
       //if the number is not divisible then it is a prime number//
       return output.textContent =`${toNumber} is a prime number`;
    
};

// function to delete the input field//
const clearInput = () =>{
    document.getElementById('number').value = '';
    output.textContent = '';
};

// event listener and function to check for the prime number after the key is pressed//
document.getElementById('number').addEventListener('keypress', (event) =>{
    if(event.key === 'Enter'){
        isPrime();
    }
});
// event listener and function to delete the input field after key is pressed//
document.getElementById('number').addEventListener('keypress', (event) =>{
    if(event.key === 'Escape'){
        clearInput();
    }
});

//Event listener to the check button//
checkBtn.addEventListener("click", isPrime);

//Event listener to the clear button//
clearBtn.addEventListener("click", clearInput);