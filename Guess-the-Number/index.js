const form = document.getElementById('form');
form.addEventListener('submit',handleSubmit  )

const status = document.getElementById('status');
const attempt = document.getElementById('attempt');
const result = document.getElementById('result');
const restartButton = document.getElementById('btnRestart');
restartButton.addEventListener('click', restart);

const Guess = {
    max: 10,
    attemptsNumber: 0,
    numberDrawn: function randomValue() {
        return Math.round(Math.random() * this.max);
    }
};

let numberDrawn = Guess.numberDrawn();

    function handleSubmit(event) {
        event.preventDefault();

    const kick = document.getElementById('kick').value;

    if (isNaN(kick)) {
        alert('Digite algum valor!');
        return;
    }

    Guess.attemptsNumber++;
    updateAttempt(attempt, Guess.attemptsNumber);

    if (numberDrawn == kick) {
        handleGuessCorrect();
    } else if (numberDrawn > kick) {
        handleGuessIncorrect('maior');
    } else {
        handleGuessIncorrect('menor');
    }
};

function handleGuessCorrect() {
    playAgain();
    status.innerHTML = 'Parabéns você acertou!!';
    attempt.innerHTML = `Tentativas: ${Guess.attemptsNumber}`;
    updateStyles('#37c978', '#fff');
    clearInput();
}

function handleGuessIncorrect(comparison) {
    status.innerHTML = `O número é ${comparison}`;
    attempt.innerHTML = `Tentativas: ${Guess.attemptsNumber}`;
    updateStyles('#de4251', '#fff');
    clearInput();
}

function playAgain() {
    restartButton.style.display = 'flex';
    numberDrawn = Guess.numberDrawn();
}

function restart() {
    Guess.attemptsNumber = 0;
    updateAttempt(attempt, Guess.attemptsNumber);

    status.innerHTML = 'Advinhe o número sorteado!';
    status.style.color = '#00348a';
    attempt.innerHTML = 'Tentativas: 0';
    attempt.style.color = '#00348a';
    attempt.style.fontSize = '1.3rem';
    attempt.style.fontWeight = '300';

    result.style.background = 'none';
    restartButton.style.display = 'none';

    numberDrawn = Guess.numberDrawn();
}

function updateAttempt(element, value) {
    element.innerHTML = value;
}

function updateStyles(backgroundColor, textColor) {
    result.style.transition = '0.4s';
    result.style.background = backgroundColor;
    result.style.color = textColor;
    status.style.color = textColor;
}

function clearInput() {
    document.getElementById('kick').value = '';
}