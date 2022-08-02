## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)

## HTML Elements: 
- form for the input of questions and option 1 + option 2
  **Why? so the user can interact with the poll and input the question/ options they want to see**
- submit button/ enter selection at the end of the form
  **why? so the user can enter the form and start the poll voting**
- div in a separate section to display the current poll 
  **why? this is where the live poll will be held and where votes can be casted**
- 4 buttons to up vote or down vote each option 
  **this is for the user to be able to vote on which selection they want to win**
- 1 button at the bottom to end the poll 
  **to end the poll so the user can start a new one with the data of the current being stored**
- bottom section and divs to display the past polls once the submit button is hit
  **section for the user to be able to see all the previous polls that were created and their stats**

## State
- the questions and the options that are inputted for the poll 
- the number of up votes and down votes for each option 

## User Events
<!-- 1) Firstly the user should be able to type into the input bars their question and the 2 options to vote on -->
<!-- 2) upon submitting (whether enter or click) the inputs should show up under current poll display 
    - the input bars where the user types their questions should clear out as well -->
3) upon clicking up or down, the number of votes should increment accordingly 
4) upon clicking end button, current poll display should clear and data should be transferred over to past polls 
    - past polls and their data should all be displayed in a loop to prevent repeated boxes