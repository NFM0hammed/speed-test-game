"use strict";
// Get DOM Elements
const startBtn = document.querySelector(".start-game button"), getNumberOfTexts = document.querySelector(".number-of-texts span:last-of-type"), time = document.querySelector(".time span"), paragraph = document.querySelector(".text p"), inputText = document.querySelector(".type-text .input"), gameOver = document.querySelector(".game-over"), tryAgain = document.querySelector(".game-over button"), gameWin = document.querySelector(".game-win"), playAgain = document.querySelector(".game-win button");
// Get easy level
let levelElement = document.querySelector(".levels span.easy"), 
// Get the last element of the levels [Example: Insane]
lastLevelElement = document.querySelector(".levels span:last-of-type"), 
// To get the text in the level and move to the next one
text = 0, 
// To determine the level
activeCurrenrtLevelElement = levelElement.classList.value, 
// get the length of the texts in the same level
lengthOfCurrentTexts = data[activeCurrenrtLevelElement].texts.length;
/*
    To show the information on DOM
    [Number of texts, Levels, Time, Paragraph]
*/
function showInfo() {
    // Reset the length of the texts after passing the level
    lengthOfCurrentTexts = data[activeCurrenrtLevelElement].texts.length;
    // Show the length of the texts in the same level
    getNumberOfTexts.innerHTML = String(lengthOfCurrentTexts);
    // Add active class to the current level
    levelElement.classList.add("active");
    // Show the time of the levels
    time.innerHTML = String(data[activeCurrenrtLevelElement].time);
    // Show the current paragrpah
    paragraph.innerHTML = data[activeCurrenrtLevelElement].texts[text];
}
// Show the current info of the current level
showInfo();
// Start the game after click
startBtn.addEventListener("click", gameLogic, { once: true });
// To reload the page after win or lose
function again(btn) {
    btn.addEventListener("click", () => { location.reload(); });
}
// Try again after lose
again(tryAgain);
// Play again after win
again(playAgain);
/*
    Can't copy the text and paste it on input field
    Can't drop the text to the input field
*/
function handleText(event) {
    inputText.addEventListener(event, (e) => {
        e.preventDefault();
    });
}
handleText("paste");
handleText("drop");
function gameLogic() {
    inputText.textContent = "";
    // Check every 1000 millisecond if there's any change
    const begin = setInterval(() => {
        // Reduce the time by 1 every 1000 millisecond
        time.innerHTML = String(--data[activeCurrenrtLevelElement].time);
        // Gives a warning that the time is about to run out
        if (Number(time.innerHTML) < 10) {
            time.classList.add("time-alert");
        }
        // The time is run out, means you're lose
        if (Number(time.innerHTML) === 0) {
            clearInterval(begin);
            gameOver.style.display = "block";
        }
        // Means you wrote the correct text
        if (paragraph.innerHTML === inputText.textContent) {
            // Show the remainder of number of the texts
            getNumberOfTexts.innerHTML = String(--lengthOfCurrentTexts);
            // Show the next text
            paragraph.innerHTML = data[activeCurrenrtLevelElement].texts[++text];
            inputText.textContent = "";
        }
        // You're completed the current level
        if (data[activeCurrenrtLevelElement].texts.length === text) {
            // Remove time alert after reset time
            if (!lastLevelElement.classList.contains(activeCurrenrtLevelElement)) {
                time.classList.remove("time-alert");
            }
            clearInterval(begin);
            // You're completed all levels so, you're win
            if (lastLevelElement.classList.contains(activeCurrenrtLevelElement) && data[activeCurrenrtLevelElement].texts[data[activeCurrenrtLevelElement].texts.length - 1]) {
                levelElement.classList.remove("active");
                levelElement.classList.add("done");
                gameWin.style.display = "block";
                paragraph.innerHTML = "";
                return false;
            }
            // Go to next level after complete the current level
            nextLevel();
            // For the start of the new level
            gameLogic();
        }
    }, 1000);
}
function nextLevel() {
    // Reset for get the first text in the next level
    text = 0;
    // Remove active from the current level
    levelElement.classList.remove("active");
    // Means finished the current level
    levelElement.classList.add("done");
    // Go to the next element [Easy => Medium => ...]
    levelElement = levelElement.nextElementSibling;
    // Add active class to the next element [easy, medium active]
    activeCurrenrtLevelElement = levelElement.classList.value;
    // Show the new information of the new level
    showInfo();
}
