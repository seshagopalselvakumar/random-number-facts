let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');
let numberInput = document.querySelector('#numberInput');
let enterText = document.querySelector('#enterText');
let dateList = document.querySelector('#dateList');
let numberList = document.querySelector('#numberList');
let yearList = document.querySelector('#yearList');
let mathList = document.querySelector('#mathList');
// Using AJAX request to find a fact about the inputted number
function number(){
    console.log('Execute');
    numberList.style.fontSize = '20px';
    numberList.style.color = 'rgb(255, 145, 0)';
    dateList.style.fontSize = '17.5px';
    dateList.style.color = '#000';
    yearList.style.fontSize = '17.5px';
    yearList.style.color = '#000';
    mathList.style.fontSize = '17.5px';
    mathList.style.color = '#000';
    fact.style.display = 'none';
    enterText.style.display = 'block';
    numberInput.style.display = 'block';
    numberInput.addEventListener('input', getFactAjax);
    function getFactAjax(){
        let number = numberInput.value;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://numbersapi.com/' +number);
        xhr.onload = function(){
            if(this.status == 200 && number != ''){
                fact.style.display = 'block';
                factTitle.innerText = 'Number fact:';
                factText.innerText = this.responseText; 
            }
        }
    
        xhr.send();
    }
}
function date(){
    console.log('execute');
    dateList.style.fontSize = '20px';
    dateList.style.color = 'rgb(187, 255, 0)';
    numberList.style.fontSize = '17.5px';
    numberList.style.color = '#000';
    yearList.style.fontSize = '17.5px';
    yearList.style.color = '#000';
    mathList.style.fontSize = '17.5px';
    mathList.style.color = '#000';
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://numbersapi.com/random/' +'date');
        xhr.onload = function(){
            if(this.status == 200 && number != ''){

                fact.style.display = 'block';
                factTitle.innerText = 'Date fact:';
                enterText.style.display = 'none';
                numberInput.style.display = 'none';
                factText.innerText = this.responseText; 
            }
        }
    
        xhr.send();
}
function year(){
    console.log('execute');
    yearList.style.fontSize = '20px';
    yearList.style.color = 'rgb(0, 55, 255)';
    numberList.style.fontSize = '17.5px';
    numberList.style.color = '#000';
    mathList.style.fontSize = '17.5px';
    mathList.style.color = '#000';
    dateList.style.fontSize = '17.5px';
    dateList.style.color = '#000';
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://numbersapi.com/random/' +'year');
        xhr.onload = function(){
            if(this.status == 200 && number != ''){

                fact.style.display = 'block';
                factTitle.innerText = 'Year fact:';
                enterText.style.display = 'none';
                numberInput.style.display = 'none';
                factText.innerText = this.responseText; 
            }
        }
    
        xhr.send();
}
function math(){
    console.log('execute');
    mathList.style.fontSize = '20px';
    mathList.style.color = 'rgb(255, 0, 0)';
    numberList.style.fontSize = '17.5px';
    numberList.style.color = '#000';
    dateList.style.fontSize = '17.5px';
    dateList.style.color = '#000';
    yearList.style.fontSize = '17.5px';
    yearList.style.color = '#000';
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://numbersapi.com/random/' +'math');
        xhr.onload = function(){
            if(this.status == 200 && number != ''){

                fact.style.display = 'block';
                factTitle.innerText = 'Math fact:';
                enterText.style.display = 'none';
                numberInput.style.display = 'none';
                factText.innerText = this.responseText; 
            }
        }
    
        xhr.send();
}