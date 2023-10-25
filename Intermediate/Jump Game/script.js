const character = document.getElementById("character");
const block = document.getElementById("block");
const block2 = document.getElementById("block2");
const block3 = document.getElementById("block3");
const scoreSpan = document.getElementById("scoreSpan");

let isPaused = false;
let isGameOver = false;
let counter = 0;
let checkDead;
let blockSpeed = 3;

let playerName = "";

document.getElementById("submitNameButton").addEventListener("click", function(event) {
  event.preventDefault();
  
  playerName = document.getElementById("nameInput").value;
  document.getElementById("nameInput").style.display = "none";
  document.getElementById("submitNameButton").style.display = "none";
});


document.getElementById("clearButton").addEventListener("click", function() {
  // Remove todas as linhas da tabela
  let tableBody = document.getElementById("scoreTableBody") 
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild)
  }
})

function jump() {
  if (character.classList == "animate" || isPaused || isGameOver) {
    return
  }
  character.classList.add("animate")
  setTimeout(function () {
    character.classList.remove("animate")
  }, 500)
}

function togglePause() {
  if (isPaused) {
    isPaused = false
    moveBlocks()
    checkDead = setInterval(updateGame, 10)
    document.getElementById("pauseButton").innerHTML = "Pausa"
  } else {
    isPaused = true
    stopBlocks()
    clearInterval(checkDead)
    document.getElementById("pauseButton").innerHTML = "Continuar"
  }
}

function stopBlocks() {
  block.style.animationPlayState = "paused"
  block2.style.animationPlayState = "paused"
  block3.style.animationPlayState = "paused"
}

function moveBlocks() {
  block.style.animationPlayState = "running"
  block2.style.animationPlayState = "running"
  block3.style.animationPlayState = "running"
}

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function resetGame() {
  isGameOver = false
  character.style.left = "0px"

  // Redefinir posição e velocidade dos blocos
  block.style.left = "300px"
  block2.style.left = "1000px"
  block3.style.left = "400px"
  blockSpeed = 5
  var block2Speed = 6
  var block3Speed = 4

  // Ajustar a velocidade da animação diretamente no CSS
  block.style.animation = "block " + blockSpeed + "s infinite linear"
  block2.style.animation = "block2 " + block2Speed + "s infinite linear"
  block3.style.animation = "block2 " + block3Speed + "s infinite linear"

  block.style.backgroundColor = getRandomColor();
  block2.style.backgroundColor = getRandomColor();
  block3.style.backgroundColor = getRandomColor();

  // Remover a classe de animação do personagem
  character.classList.remove("animate")

  // Reiniciar o contador
  counter = 0
  document.getElementById("scoreSpan").innerHTML = "0"

  // Iniciar os blocos novamente
  moveBlocks()

  // Reiniciar o intervalo de verificação de jogo
  checkDead = setInterval(updateGame, 10)
}

document.onkeydown = function (e) {
  if (e.keyCode == 37) {
    // Left key
    moveLeft()
  } else if (e.keyCode == 39) {
    // Right key
    moveRight()
  }
}

function moveLeft() {
  var leftPosition = parseInt(window.getComputedStyle(character).getPropertyValue("left"))
  if (leftPosition > 0) {
    character.style.left = leftPosition - 10 + "px"
  }
}

function moveRight() {
  var leftPosition = parseInt(window.getComputedStyle(character).getPropertyValue("left"))
  if (leftPosition < window.innerWidth - 50) {
    character.style.left = leftPosition + 10 + "px"
  }
}

function updateGame() {
  if (!isPaused && !isGameOver) {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
    let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"))
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    let blockLeft2 = parseInt(window.getComputedStyle(block2).getPropertyValue("left"))
    let blockLeft3 = parseInt(window.getComputedStyle(block3).getPropertyValue("left"))

    let characterWidth = parseInt(window.getComputedStyle(character).getPropertyValue("width"))

    if (
      (blockLeft < characterLeft + characterWidth && blockLeft > characterLeft && characterTop >= 130) ||
      (blockLeft2 < characterLeft + characterWidth && blockLeft2 > characterLeft && characterTop >= 130) ||
      (blockLeft3 < characterLeft + characterWidth && blockLeft3 > characterLeft && characterTop <= 100)
    ) {
      block.style.animation = "none"
      block2.style.animation = "none"
      block3.style.animation = "none"
      clearInterval(checkDead)
      isGameOver = true

      addScoreToTable(playerName, Math.floor(counter / 100))

      alert("Fim de jogo. Pontuação: " + Math.floor(counter / 100))
      resetGame()
    }
    else {
      counter++
      document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100)
    }
  }
}

function addScoreToTable(name, score) {
  let tableBody = document.getElementById("scoreTableBody")
  let newRow = tableBody.insertRow(-1)
  let nameCell = newRow.insertCell(0)
  let scoreCell = newRow.insertCell(1)
  nameCell.innerHTML = name
  scoreCell.innerHTML = score

  // Remove as linhas excedentes
  while (tableBody.rows.length > 4) {
    tableBody.deleteRow(0)
  }
}
checkDead = setInterval(updateGame, 10)