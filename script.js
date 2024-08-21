const symbols = ['🍒', '🍋', '⭐', '🔔', '🍉', '🍇'];
let points = 0;

const reel1 = document.getElementById('reel1');
const reel2 = document.getElementById('reel2');
const reel3 = document.getElementById('reel3');
const spinButton = document.getElementById('spinButton');
const resetButton = document.getElementById('resetButton');
const pointsDisplay = document.getElementById('points');
const message = document.getElementById('message');

function spinReels() {
    const spinDuration = 1000; // 1 second spin
    let interval;

    function spin() {
        reel1.textContent = getRandomSymbol();
        reel2.textContent = getRandomSymbol();
        reel3.textContent = getRandomSymbol();
    }

    interval = setInterval(spin, 50); // Spin every 50ms

    setTimeout(() => {
        clearInterval(interval);
        evaluateResult();
    }, spinDuration);
}

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function evaluateResult() {
    const result1 = reel1.textContent;
    const result2 = reel2.textContent;
    const result3 = reel3.textContent;

    if (result1 === result2 && result2 === result3) {
        points += 10;
        message.textContent = 'Jackpot! You won 10 points!';
    } else if (result1 === result2 || result2 === result3 || result1 === result3) {
        points += 5;
        message.textContent = 'Nice! You won 5 points!';
    } else {
        message.textContent = 'No match, try again!';
    }

    pointsDisplay.textContent = points;
}

function resetGame() {
    points = 0;
    pointsDisplay.textContent = points;
    message.textContent = '';
    reel1.textContent = '🍒';
    reel2.textContent = '🍋';
    reel3.textContent = '⭐';
}

spinButton.addEventListener('click', spinReels);
resetButton.addEventListener('click', resetGame);
