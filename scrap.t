var startButton = document.getElementById("strt");
var question = document.getElementById("question");
var pickA = document.getElementById('a');
var pickB = document.getElementById('b');
var pickC = document.getElementById('c');
var pickD = document.getElementById('d');
var response = document.getElementById('response');
var seconds = document.getElementById('seconds');
var gOver = document.getElementById('gameOver');

strt.addEventListener("click", questionOne);



var questions = ["what is it called when the board does a combination of both a kickflip and a 360 shuvit?", "which skate company has the American eagle as their logo?", "which Pro skater has the title of best skater of all time", "what are the metal cylinders that go inside the wheel refered to as?"];

var answerOne = ["Variel-flip", "Knightmare-flip", "Tre-flip", "Hospital-flip"];

var answerTwo = ["AntiHero", "BirdHouse", "Element", "SantaCruz"];

var answerThree = ["Chris Cole", "Rodney Mullen", "Tony Hawk", "Andrew Allen"];

var answerFour = ["Trucks", "Wing Nuts", "Barrings", "Toppers"];


var answersArray = [answerOne, answerTwo, answerThree, answerFour ]


var input = 1;
var answer = "none";

var correct = 0
var incorrect = 0


var totalSeconds = 15;

var seconds = 15;
var sec = document.getElementById('seconds');



function startTimer() {
    
    if (seconds == -1) {

        
        
        


    } else {
        sec.innerHTML = seconds--;
        
    }
}


function questionOne() {
    $('#strt').hide()
   
    
    var timerId = setInterval(startTimer, 1000);


    question.innerHTML = "<p>" + questions[0] + "</p>";

    correctAnswer = 'c';

    var button = document.getElementById('a');
    button.textContent = answerOne[0];
    pick.appendChild(button);

    var button = document.getElementById('b');
    button.textContent = answerOne[1];
    pick.appendChild(button);

    var button = document.getElementById('c');
    button.textContent = answerOne[2];
    pick.appendChild(button);

    var li = document.getElementById('d');
    li.textContent = answerOne[3];


}

function questionTwo() {

    question.innerHTML = "<p>" + questions[1] + "</p>";

    correctAnswer = 'a';

    var button = document.getElementById('a');
    button.textContent = answerTwo[0];
    pick.appendChild(button);

    var button = document.getElementById('b');
    button.textContent = answerTwo[1];
    pick.appendChild(button);

    var button = document.getElementById('c');
    button.textContent = answerTwo[2];
    pick.appendChild(button);

    var li = document.getElementById('d');
    li.textContent = answerTwo[3];


}
function questionThree() {

    question.innerHTML = "<p>" + questions[2] + "</p>";

    correctAnswer = 'b';

    var button = document.getElementById('a');
    button.textContent = answerThree[0];
    pick.appendChild(button);

    var button = document.getElementById('b');
    button.textContent = answerThree[1];
    pick.appendChild(button);

    var button = document.getElementById('c');
    button.textContent = answerThree[2];
    pick.appendChild(button);

    var li = document.getElementById('d');
    li.textContent = answerThree[3];


}
function questionFour() {

    question.innerHTML = "<p>" + questions[3] + "</p>";

    correctAnswer = 'c';

    var button = document.getElementById('a');
    button.textContent = answerFour[0];
    pick.appendChild(button);

    var button = document.getElementById('b');
    button.textContent = answerFour[1];
    pick.appendChild(button);

    var button = document.getElementById('c');
    button.textContent = answerFour[2];
    pick.appendChild(button);

    var li = document.getElementById('d');
    li.textContent = answerFour[3];


}

$('.choice').on('click', function(){
    console.log('u got clicked!', $(this).attr('id'))
    answerCheck($(this).attr('id'))

    
})

function answerCheck(answer) {
    

    console.log('this is the answer', answer, 'this is the correct answer', correctAnswer)



    if (answer == correctAnswer) {
        alert('u got it right!!')
        input++;

        var li = document.getElementById('response');
        li.textContent = 'correct! nice work!';
        console.log(startButton);
        seconds++;
        correct +=25

    }
    else {
        alert('u got it wrong!!')
        var li = document.getElementById('response');
        li.textContent = 'sorry, nice try though the correct answer is';
        seconds--;
        input++
        console.log('false');
        
    };
    console.log('THIS IS THE NEW SCORE!!', correct)

    if (input == 1) {
        questionOne();
    }
    if (input == 2) {
       
        questionTwo();
    }
    if (input == 3) {
        questionThree();
    }
    if (input == 4) {
        questionFour();
    }
    if(input > 4) {
        reset()
    }


}

function reset(){
    $('#strt').show()
    $('#question').empty()

    var button = document.getElementById('a');
    button.textContent = '';

    var button = document.getElementById('b');
    button.textContent = '';

    var button = document.getElementById('c');
    button.textContent = '';

    var li = document.getElementById('d');
    li.textContent = ''
    
    
    var highScoreInput = $('<input>')
    highScoreInput.attr('id','highScore')
    $('.gameOver').append(highScoreInput)
    
    var button = $('<button>');
    button.attr('id','save');
    button.text('save your name');
    $('.gameOver').append(button);
}

$(document).on('click', '#save', function(){
    console.log('you got clicked', $('#highScore').val())
    //localstaroage time
})

