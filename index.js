function playGame(choice) {
  var diceRoll = Math.floor(Math.random() * 6) + 1
  var result = diceRoll % 2 === 0? 'par' : 'impar'
  var resultsDiv = document.getElementById('results')
  if(result === choice) {
    resultsDiv.innerHTML = `Você ganhou! O dado caiu em ${diceRoll} o que é ${result}.`
  } else {
    resultsDiv.innerHTML = `Você perdeu! O dado caiu em ${diceRoll} o que é ${result}.`
  }

}