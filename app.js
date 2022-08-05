// import functions and grab DOM elements
import { renderPoll } from './render-function.js';

const pollForm = document.getElementById('poll-form');
const currentQuestion = document.getElementById('live-question');
const currentOptionOne = document.getElementById('live-option-one');
const currentOptionTwo = document.getElementById('live-option-two');
const optionOneLike = document.getElementById('option-one-like');
const optionOneDislike = document.getElementById('option-one-dislike');
const optionTwoLike = document.getElementById('option-two-like');
const optionTwoDislike = document.getElementById('option-two-dislike');

const publishButtEl = document.getElementById('publish-button');

const pastPollsDisplay = document.getElementById('past-polls');

const scoreOne = document.getElementById('score-one');
const scoreTwo = document.getElementById('score-two');

// let state

let question = '';
let optionOne = '';
let optionTwo = '';
let optionOneCount = 0;
let optionTwoCount = 0;

let pastPollsArr = [];


// set event listeners 

pollForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(pollForm);

    const userQuestion = data.get('question');
    const userOptionOne = data.get('input-one');
    const userOptionTwo = data.get('input-two');

    question = userQuestion;
    optionOne = userOptionOne;
    optionTwo = userOptionTwo;

    displayCurrentPoll();
    pollForm.reset();

});


optionOneLike.addEventListener('click', () => {
    optionOneCount++;
    scoreOne.textContent = optionOneCount;
});

optionOneDislike.addEventListener('click', () => {
    optionOneCount--;
    scoreOne.textContent = optionOneCount;
});

optionTwoLike.addEventListener('click', () => {
    optionTwoCount++;
    scoreTwo.textContent = optionTwoCount;
});

optionTwoDislike.addEventListener('click', () => {
    optionTwoCount--;
    scoreTwo.textContent = optionTwoCount;
});

publishButtEl.addEventListener('click', () => {

    const endPollStats = {
        question: question,
        optionOne: optionOne,
        optionTwo: optionTwo,
        optionOneCount: optionOneCount,
        optionTwoCount: optionTwoCount,
    };
    pastPollsArr.push(endPollStats);
    displayAllPolls();

    pollReset();
});

function displayAllPolls() {
    pastPollsDisplay.textContent = '';

    for (let pastPoll of pastPollsArr) {
        const pastPOllEl = renderPoll(pastPoll);
        pastPollsDisplay.append(pastPOllEl);
    }
    
}

function displayCurrentPoll() {
    currentQuestion.textContent = question;
    currentOptionOne.textContent = optionOne;
    currentOptionTwo.textContent = optionTwo;
}

function pollReset() {
    currentQuestion.textContent = '';
    currentOptionOne.textContent = '';
    currentOptionTwo.textContent = '';
    scoreOne.textContent = 0;
    scoreTwo.textContent = 0;
    question = '';
    optionOne = '';
    optionTwo = '';
    optionOneCount = 0;
    optionTwoCount = 0;
}
