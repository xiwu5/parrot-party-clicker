// Add javascript code to Party Parrot Clicker such that:
const state = {
    clicks: 0,
};

// 1. A click on the Party Parrot increases the counter by 1
const registerEvents = () => {
    const imageSrc = "https://cultofthepartyparrot.com/parrots/hd/parrot.gif";
    const imgParrot = document.querySelector(`img[src="${imageSrc}"]`);
    const parrotCountContainer = document.querySelector('#parrotCount');
    const resetButton = document.querySelector('#resetButton');
    
    imgParrot.addEventListener('click', () => {
        state.clicks += 1;
        parrotCountContainer.textContent = `Clicks: ${state.clicks}`;
        // 3. Add an effect whenever the clickCount
        //    reaches a specific number.
        //    (Ex: make parrot bigger, smaller, change the text/emoji,
        //    etc.)

        if (state.clicks === 5) {
            imgParrot.classList.add('big-parrot');
        } else if (state.clicks === 10) {
            imgParrot.classList.remove('big-parrot');
            imgParrot.classList.add('small-parrot');
        }
    });


// 2. Add a button called ‘reset’ that will reset the
//    click count to ‘0’.
    resetButton.addEventListener('click', () => {
    state.clicks = 0;
    parrotCountContainer.textContent = `Clicks: ${state.clicks}`;
    });
};

// Extra:
// // Box 1: When the mouse hovers over Box 1, switch the background to pink
// Box 2: When the spacebar is pressed down, make the text in Box 2 turn into a flan emoji
// Box 3: When Box 3 is clicked on, make Party Parrot appear and disappear
// Box 4: When Box 4 is double clicked, an alert shows up
document.addEventListener('DOMContentLoaded', registerEvents);