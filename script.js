var startButton = document.getElementById("strt");
var question = document.getElementById("question");
var pickA = document.getElementById('a');
var pickB = document.getElementById('b');
var pickC = document.getElementById('c');
var pickD = document.getElementById('d');
var response = document.getElementById('response');
var seconds = document.getElementById('seconds');
var gOver = document.getElementById('gameOver');





var questions = ["what is it called when the board does a combination of both a kickflip and a 360 shuvit?", "which skate company has the American eagle as their logo?", "which Pro skater has the title of best skater of all time", "what are the metal cylinders that go inside the wheel refered to as?"];

var answerOne = ["Variel-flip", "Knightmare-flip", "Tre-flip", "Hospital-flip"];

var answerTwo = ["AntiHero", "BirdHouse", "Element", "SantaCruz"];

var answerThree = ["Chris Cole", "Rodney Mullen", "Tony Hawk", "Andrew Allen"];

var answerFour = ["Trucks", "Wing Nuts", "Barrings", "Toppers"];


var answersArray = [answerOne, answerTwo, answerThree, answerFour]


var input = 1;
var answer = "none";

var correct = 0
var incorrect = 0

var questionIndex = 0
var correctAnswerArray = ['c','a','b','c']


var totalSeconds = 15;

var seconds = 15;
var sec = document.getElementById('seconds');



function startTimer() {
    
    if (seconds == -1) {

        
    

    } else {
        sec.innerHTML = seconds--;
        
    }
}

strt.addEventListener("click", function(){
    var timerId = setInterval(startTimer, 1000);
    displayQuestion()
});



function displayQuestion() {
    $('#strt').hide()
   
    
    


    question.innerHTML = "<p>" + questions[questionIndex] + "</p>";

    correctAnswer = correctAnswerArray[questionIndex];

    var button = document.getElementById('a');
    button.textContent = answersArray[questionIndex ][0];
    pick.appendChild(button);

    var button = document.getElementById('b');
    button.textContent =  answersArray[questionIndex][1];
    pick.appendChild(button);

    var button = document.getElementById('c');
    button.textContent =  answersArray[questionIndex][2];
    pick.appendChild(button);

    var li = document.getElementById('d');
    li.textContent =  answersArray[questionIndex][3];


}

// function questionTwo() {

//     question.innerHTML = "<p>" + questions[1] + "</p>";

//     correctAnswer = 'a';

//     var button = document.getElementById('a');
//     button.textContent =  answersArray[1][0];
//     pick.appendChild(button);

//     var button = document.getElementById('b');
//     button.textContent = answersArray[1][1];
//     pick.appendChild(button);

//     var button = document.getElementById('c');
//     button.textContent = answersArray[1][2];
//     pick.appendChild(button);

//     var li = document.getElementById('d');
//     li.textContent = answersArray[1][3];


// }
// function questionThree() {

//     question.innerHTML = "<p>" + questions[2] + "</p>";

//     correctAnswer = 'b';

//     var button = document.getElementById('a');
//     button.textContent = answersArray[2][0];
//     pick.appendChild(button);

//     var button = document.getElementById('b');
//     button.textContent = answersArray[2][1];
//     pick.appendChild(button);

//     var button = document.getElementById('c');
//     button.textContent = answersArray[2][2];
//     pick.appendChild(button);

//     var li = document.getElementById('d');
//     li.textContent = answersArray[2][3];


// }
// function questionFour() {

//     question.innerHTML = "<p>" + questions[3] + "</p>";

//     correctAnswer = 'c';

//     var button = document.getElementById('a');
//     button.textContent = answersArray[3][0];
//     pick.appendChild(button);

//     var button = document.getElementById('b');
//     button.textContent = answersArray[3][1];
//     pick.appendChild(button);

//     var button = document.getElementById('c');
//     button.textContent = answersArray[3][2];
//     pick.appendChild(button);

//     var li = document.getElementById('d');
//     li.textContent = answersArray[3][3];


// }

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
    questionIndex++

    

    // if (input == 1) {
    //     displayQuestion();
    // }
    // if (input == 2) {
       
    //     questionTwo();
    // }
    // if (input == 3) {
    //     questionThree();
    // }
    // if (input == 4) {
    //     questionFour();
    // }
    if(input > 4) {
        reset()
    } else {
        displayQuestion()
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

