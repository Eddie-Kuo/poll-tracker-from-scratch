// import functions and grab DOM elements

const pollForm = document.getElementById('poll-form');
const currentQuestion = document.getElementById('live-question');
const currentOptionOne = document.getElementById('live-option-one');
const currentOptionTwo = document.getElementById('live-option-two');
const optionOneLike = document.getElementById('option-one-like');
const optionOneDislike = document.getElementById('option-one-dislike');
const optionTwoLike = document.getElementById('option-two-like');
const optionTwoDislike = document.getElementById('option-two-dislike');



// let state

let question = '';
let optionOne = '';
let optionTwo = '';
let optionOneCount = 0;
let optionTwoCount = 0;


// set event listeners 

pollForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(pollForm);

    const userQuestion = data.get('question');
    const userOptionOne = data.get('input-one');
    const userOptionTwo = data.get('input-two');
    
    currentQuestion.textContent = userQuestion;
    currentOptionOne.textContent = userOptionOne;
    currentOptionTwo.textContent = userOptionTwo;

    pollForm.reset();
});




  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
