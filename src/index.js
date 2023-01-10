import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import AdviceService from './advice.js'

//let slip = AdviceService.giveAdvice();

//console.log(slip.then(function() {console.log(slip.slip.advice)}));

function giveAdvice() {
  AdviceService.giveAdvice()
    .then(function(response) {
      if (response.slip) {
        printElements(response);
      } else {
        printError(response);
      }
    });
}

// UI Logic

function printElements(response) {
  document.querySelector('button').innerText = `${response.slip.advice}`;
}

function printError(response) {
  document.querySelector('body').innerText = `${response}`;
}

//giveAdvice()

document.getElementById("fortune").addEventListener("click", giveAdvice)
