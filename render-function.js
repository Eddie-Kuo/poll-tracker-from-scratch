export function renderPoll(poll) {
    
    const questionDiv = document.createElement('div');
    const optionOneDiv = document.createElement('p');
    const optionTwoDiv = document.createElement('p');
    const optionOneCountDiv = document.createElement('p');
    const optionTwoCountDiv = document.createElement('p');

    questionDiv.textContent = poll.question;
    optionOneDiv.textContent = poll.optionOne;
    optionTwoDiv.textContent = poll.optionTwo;
    optionOneCountDiv.textContent = poll.optionOneCount;
    optionTwoCountDiv.textContent = poll.optionTwoCount;

    questionDiv.append(optionOneDiv, optionOneCountDiv, optionTwoDiv, optionTwoCountDiv);
        
    return questionDiv;
    
}
