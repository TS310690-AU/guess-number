const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const feedback = document.getElementById('feedback');
    const attemptsDisplay = document.getElementById('attempts');
    const newGameButton = document.getElementById('newGameButton');

    let secretNumber;
    let attempts;

    function initGame() {
      secretNumber = Math.floor(Math.random() * 100) + 1;
      attempts = 0;
      attemptsDisplay.textContent = attempts;
      feedback.textContent = '';
      guessInput.value = '';
      guessButton.disabled = false;
    }

    function checkGuess() {
      const guess = parseInt(guessInput.value);

      if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.textContent = 'Please enter a valid number between 1 and 100.';
        feedback.className = 'incorrect';
        return;
      }

      attempts++;
      attemptsDisplay.textContent = attempts;

      if (guess === secretNumber) {
        feedback.textContent = 'Correct!';
        feedback.className = 'correct';
        guessButton.disabled = true;
      } else if (guess < secretNumber) {
        feedback.textContent = 'Too low!';
        feedback.className = 'incorrect';
      } else {
        feedback.textContent = 'Too high!';
        feedback.className = 'incorrect';
      }
    }

    guessButton.addEventListener('click', checkGuess);
    newGameButton.addEventListener('click', initGame);

    initGame();
