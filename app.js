// import functions and grab DOM elements

const pollForm = document.getElementById('poll-form');

// let state

// set event listeners 

pollForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(pollForm);

    const userQuestion = data.get('question');
    const userOptionOne = data.get('input-one');
    const userOptionTwo = data.get('input-two');
    console.log(userQuestion, userOptionOne, userOptionTwo);
})




  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
