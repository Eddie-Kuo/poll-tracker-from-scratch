// import functions and grab DOM elements

const pollForm = document.getElementById('poll-form');
const currentQuestion = document.getElementById('live-question');
const currentOptionOne = document.getElementById('live-option-one');
const currentOptionTwo = document.getElementById('live-option-two');
const optionOneLike = document.getElementById('option-one-like');
const optionOneDislike = document.getElementById('option-one-dislike');
const optionTwoLike = document.getElementById('option-two-like');
const optionTwoDislike = document.getElementById('option-two-dislike');

const publishButtEl = document.getElementById('publish-button');

const pastPolls = document.getElementById('past-polls');

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
    pollReset();

});

function pollReset() {
    currentQuestion.textContent = '';
    currentOptionOne.textContent = '';
    currentOptionTwo.textContent = '';
    scoreOne.textContent = 0;
    scoreTwo.textContent = 0;
}

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

function displayCurrentPoll() {
    currentQuestion.textContent = question;
    currentOptionOne.textContent = optionOne;
    currentOptionTwo.textContent = optionTwo;
}
    


function displayAllPolls() { // figure out how to use these functions after fixing the issue above first

}


function renderPolls(question, optionOne, optionTwo, optionOneCount, optionTwoCount) {
    const questionDiv = document.createElement('div');
    const optionOneDiv = document.createElement('p');
    const optionTwoDiv = document.createElement('p');
    const optionOneCountDiv = document.createElement('p');
    const optionTwoCountDiv = document.createElement('p');

    questionDiv.textContent = question;
    optionOneDiv.textContent = optionOne;
    optionTwoDiv.textContent = optionTwo;
    optionOneCountDiv.textContent = optionOneCount;
    optionTwoCountDiv.textContent = optionTwoCount;

    questionDiv.append(optionOneDiv, optionOneCountDiv, optionTwoDiv, optionTwoCountDiv);
    pastPolls.append(questionDiv);
}

