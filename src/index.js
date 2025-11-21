// Add javascript code to Party Parrot Clicker such that:
const state = {
    clicks: 0,
};

// 1. A click on the Party Parrot increases the counter by 1
const registerEvents = () => {
    imageSrc = "https://cultofthepartyparrot.com/parrots/hd/parrot.gif";
    const imgParrot = document.querySelector(`img[src="${imageSrc}"]`);
    imgParrot.addEventListener('click', () => {
        state.clicks += 1;
        const parrotCountContainer = document.querySelector('#parrotCount');
        parrotCountContainer.textContent = `Clicks: ${state.clicks}`;
    });
};

document.addEventListener('DOMContentLoaded', registerEvents);

// 2. Add a button called ‘reset’ that will reset the
//    click count to ‘0’.
const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', () => {
    state.clicks = 0;
    const parrotCountContainer = document.querySelector('#parrotCount');
    parrotCountContainer.textContent = `Clicks: ${state.clicks}`;
});

// 3. Add an effect whenever the clickCount
//    reaches a specific number.
//    (Ex: make parrot bigger, smaller, change the text/emoji,
//    etc.)

// Extra:
// // Box 1: When the mouse hovers over Box 1, switch the background to pink
// Box 2: When the spacebar is pressed down, make the text in Box 2 turn into a flan emoji
// Box 3: When Box 3 is clicked on, make Party Parrot appear and disappear
// Box 4: When Box 4 is double clicked, an alert shows up
