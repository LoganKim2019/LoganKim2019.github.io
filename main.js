
var secretNumber = 0,
	numberOfGuesses = 0;

function writeMessage(elementId, message, appendMessage) {
	var elemToUpdate = document.getElementById(elementId);
	if (appendMessage) {
		elemToUpdate.innerHTML = elemToUpdate.innerHTML + message;
	} else {
		elemToUpdate.innerHTML = message;
	}
};

function newGame() {
  document.getElementById('resetB')
	secretNumber = Math.floor(Math.random() * 100) + 1;
	numberOfGuesses = 0;
	writeMessage('historyList', '');
  writeMessage('statusArea', '<p>Enter a number from 1 to 100 and press the Guess button.</p>');

}

function guessInRange(guess) {
	return (guess > 0 && guess < 101);
}

function userGuessed() {
	var userGuessed = document.getElementById('userGuess').value;
	var statusArea = document.getElementById('statusArea');
	var historyList = document.getElementById('historyList');


	if (userGuessed.length == 0 || ! guessInRange(userGuessed)) {

		writeMessage('statusArea', '<p>Enter a number from 1 to 100 and press the Guess button.</p>');

	} else if (userGuessed.indexOf('.') != -1) {
		writeMessage('statusArea', '<p>Whole numbers only please.</p>');
	} else {
		numberOfGuesses++;

		if (userGuessed == secretNumber) {
        writeMessage('statusArea', '<p>You got me! In only ' + numberOfGuesses +' guesses too! My number was ' + secretNumber + '. Let\'s go again, hit reset...</p>');


    } else if((userGuessed < (secretNumber -50)) || (userGuessed > (secretNumber +50))) {

          writeMessage('statusArea', '<p>FREEZING! You need to try better than ' + userGuessed + ', have another shot...</p>');
          writeMessage('historyList', '<li>' + userGuessed +' - FREEZING</li>', true);

		} else if ((userGuessed < (secretNumber -20)) || (userGuessed > (secretNumber +20))){

			writeMessage('statusArea', '<p>COLD! Close, but ' + userGuessed + ', isn\'t quite what i\'m thinking...</p>');
			writeMessage('historyList', '<li>' + userGuessed + ' - COLD</li>', true);


    } else if ((userGuessed < (secretNumber -10)) || (userGuessed > (secretNumber +10))) {

          writeMessage('statusArea', '<p>WARM! Almost, but ' + userGuessed + ', doesn\'t hit the mark, another!...</p>');
          writeMessage('historyList', '<li>' + userGuessed +' - WARM</li>', true);

    } else if ((userGuessed < (secretNumber -5)) || (userGuessed > (secretNumber +5))) {

          writeMessage('statusArea', '<p>HOT! Very close, ' + userGuessed + ', is almost there...</p>');
          writeMessage('historyList', '<li>' + userGuessed +' - HOT</li>', true);

    } else if ((userGuessed < (secretNumber)) || (userGuessed > (secretNumber))) {

      writeMessage('statusArea', '<p>BOILING! Just a little closer and you\'ll have me, ' + userGuessed + ', is very near...</p>');
      writeMessage('historyList', '<li>' + userGuessed +' - BOILING</li>', true);


}


	}

	document.getElementById('userGuess').value = '';
}

window.onload = function() {
	newGame();
	document.getElementById('buttonArea').addEventListener('click', userGuessed);
};
