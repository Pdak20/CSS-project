function computerChoice() {
  const Choices = ["Rock", "Paper", "Scissor"];
  let index = Math.floor(Math.random()*3);
  return Choices[index];
}

function playRound (playerChoice, computerChoice) {
  const computerChar = computerChoice.charAt(0).toUpperCase();
  switch (playerChoice.charAt(0).toUpperCase()) {
    case "R":   
      if (computerChar == "S") {results.textContent = "You won! Rock beats Scissor"
          return "Won"}
      if (computerChar == "P") {results.textContent = "You lost! Paper beats Rock"
          return "Lost"}
      if (computerChar == "R") {results.textContent = "A draw! Both chose Rock"
          return "Draw"}
    case "S":   
      if (computerChar == "P") {results.textContent = "You won! Scissor beats Paper"
          return "Won"}
      if (computerChar == "R") {results.textContent = "You lost! Rock beats Scissor"
          return "Lost"}
      if (computerChar == "S") {results.textContent = "A draw! Both chose Scissor"
          return "Draw"}
    case "P":   
      if (computerChar == "R") {results.textContent = "You won! Paper beats Rock"
          return "Won"}
      if (computerChar == "S") {results.textContent = "You lost! Scissor beats Paper"
          return "Lost"}
      if (computerChar == "P") {results.textContent = "A draw! Both chose Paper"
    return "Draw"}
  }
}

const rock = document.querySelector('.Rock');
const paper = document.querySelector('.Paper');
const scissor = document.querySelector('.Scissor');
const results = document.querySelector('.Results');
const computer = document.querySelector('.computerScore');
const person = document.querySelector('.personScore');
const roundCount = document.querySelector('.rounds');

let computerScore = 0;
let personScore = 0;
let rounds = 0;

rock.addEventListener('click',
function() {
  if (rounds < 5) {
  const string = playRound("Rock",computerChoice())
  if (string == "Won") {
    personScore++
    person.textContent = `Person: ${personScore}`
    }
  else if (string == "Lost") {
    computerScore++
    computer.textContent = `Computer: ${computerScore}`
  }
    rounds += 1;
    roundCount.textContent = `Round ${rounds}/5`
    if (rounds == 5) {
      if (personScore > computerScore) {
        results.textContent = "Game is done! Person Wins!"
      } else if (computerScore > personScore){
        results.textContent = "Game is done! Computer Wins!"
      } else {
        results.textContent = "Game is done! A draw!"
      }
    }
    }});

paper.addEventListener('click',
function() {
  if (rounds < 5) {
  const string = playRound("Paper",computerChoice())
  if (string == "Won") {
    personScore++
    person.textContent = `Person: ${personScore}`
    }
  else if (string == "Lost") {
    computerScore++
    computer.textContent = `Computer: ${computerScore}`
  }
    rounds += 1;
    roundCount.textContent = `Round ${rounds}/5`
    if (rounds == 5) {
      if (personScore > computerScore) {
        results.textContent = "Game is done! Person Wins!"
      } else if (computerScore > personScore){
        results.textContent = "Game is done! Computer Wins!"
      } else {
        results.textContent = "Game is done! A draw!"
      }
    }
    }});

scissor.addEventListener('click',
function() {
  if (rounds < 5) {
  const string = playRound("Scissor",computerChoice())
  if (string == "Won") {
    personScore++
    person.textContent = `Person: ${personScore}`
    }
  else if (string == "Lost") {
    computerScore++
    computer.textContent = `Computer: ${computerScore}`
  }
    rounds += 1;
    roundCount.textContent = `Round ${rounds}/5`
    if (rounds == 5) {
      if (personScore > computerScore) {
        results.textContent = "Game is done! Person Wins!"
      } else if (computerScore > personScore){
        results.textContent = "Game is done! Computer Wins!"
      } else {
        results.textContent = "Game is done! A draw!"
      }
    }
    }});




