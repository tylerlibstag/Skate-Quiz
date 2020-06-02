var startButton = document.getElementById("strt");
var question = document.getElementById("question");
var pickA = document.getElementById('a');
var pickB = document.getElementById('b');
var pickC = document.getElementById('c');
var pickD = document.getElementById('d');
var response = document.getElementById('response');
var seconds = document.getElementById('seconds');
var gOver = document.getElementById('gameOver');
var stored = document.getElementById('store');





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
var correctAnswerArray = ['c', 'a', 'b', 'c']




var seconds = 15;
var sec = document.getElementById('seconds');
var stored = '';












strt.addEventListener("click", function () {

    displayQuestion();
    //startTimer();
    seconds = 15;
    var timerId = setInterval(startTimer, 1000);
    function startTimer() {

    

        if (seconds == -1) {
            
            clearInterval(timerId);
    
            var over = $('<div>');
            over.attr('id', 'middle');
            over.text('Times up');
            $('#middle').append(over);
    
            reset();
        } else {
            sec.innerHTML = seconds--;
        }
    }


});




function displayQuestion() {
    $('#strt').hide()
    $('#para').hide()

    



    question.innerHTML = "<p>" + questions[questionIndex] + "</p>";

    correctAnswer = correctAnswerArray[questionIndex];

    var button = document.getElementById('a');
    button.textContent = answersArray[questionIndex][0];
    pick.appendChild(button);

    var button = document.getElementById('b');
    button.textContent = answersArray[questionIndex][1];
    pick.appendChild(button);

    var button = document.getElementById('c');
    button.textContent = answersArray[questionIndex][2];
    pick.appendChild(button);

    var li = document.getElementById('d');
    li.textContent = answersArray[questionIndex][3];


}





$('.choice').on('click', function () {
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
        seconds += 3;
        correct += 25

    }
    else {
        alert('u got it wrong!!')
        var li = document.getElementById('response');
        li.textContent = 'sorry, nice try though the correct answer is';
        seconds -= 3;
        input++
        console.log('false');

    };
    console.log('THIS IS THE NEW SCORE!!', correct)
    questionIndex++




    if (input > 4) {

        reset()
    } else {
        displayQuestion()
    }


}

function reset() {
    $('#strt').show()
    $('#para').show()
    $('#question').empty()



    var button = document.getElementById('a');
    button.textContent = '';

    var button = document.getElementById('b');
    button.textContent = '';

    var button = document.getElementById('c');
    button.textContent = '';

    var li = document.getElementById('d');
    li.textContent = ''


    var highScoreInput = $('<input>');
    highScoreInput.attr('id', 'highScore');
    $('.gameOver').append(highScoreInput);
    localStorage.setItem("store", JSON.stringify(highScoreInput));




    var button = $('<button>');
    button.attr('id', 'save');
    button.text('save your name');
    $('.gameOver').append(button);

}
function setStore() {

    localStorage.getItem(".gameOver", JSON.stringify(highScoreInput));
    $('#store').append(highScoreInput);

}


$(document).on('click', '#save', function () {
    $('#save').hide();
    $('#middle').hide();
    $('.gameOver').hide();
    console.log('you got clicked', $('#highScore').val())

})


