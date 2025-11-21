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

        // Trigger the little 'pop' animation on the heading every increment
        parrotCountContainer.classList.remove('pop');
        void parrotCountContainer.offsetWidth; // force reflow
        parrotCountContainer.classList.add('pop');

        // Milestone effects
        if (state.clicks === 5) {
            imgParrot.classList.add('big-parrot');
        } else if (state.clicks === 10) {
            imgParrot.classList.remove('big-parrot');
            imgParrot.classList.add('small-parrot');
        }

        if (state.clicks === 15) {
            // quick spin while preserving current scale
            imgParrot.classList.add('spin');
            setTimeout(() => imgParrot.classList.remove('spin'), 900);
        }

        if (state.clicks === 20) {
            // glow the counter briefly
            parrotCountContainer.classList.add('glow');
            setTimeout(() => parrotCountContainer.classList.remove('glow'), 1200);
        }

        if (state.clicks > 0 && state.clicks % 25 === 0) {
            // page-wide celebratory background
            document.body.classList.add('rainbow');
            setTimeout(() => document.body.classList.remove('rainbow'), 2000);
        }
    });


// 2. Add a button called ‘reset’ that will reset the
//    click count to ‘0’.
    resetButton.addEventListener('click', () => {
    state.clicks = 0;
    parrotCountContainer.textContent = `Clicks: ${state.clicks}`;
    // cleanup any visual state
    imgParrot.classList.remove('big-parrot', 'small-parrot', 'spin');
    parrotCountContainer.classList.remove('pop', 'glow');
    document.body.classList.remove('rainbow');
    });
};

// Extra:
// // Box 1: When the mouse hovers over Box 1, switch the background to pink
// Box 2: When the spacebar is pressed down, make the text in Box 2 turn into a flan emoji
// Box 3: When Box 3 is clicked on, make Party Parrot appear and disappear
// Box 4: When Box 4 is double clicked, an alert shows up
document.addEventListener('DOMContentLoaded', registerEvents);