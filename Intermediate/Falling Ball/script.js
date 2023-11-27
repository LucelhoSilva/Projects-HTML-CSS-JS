var character = document.getElementById("character");
var game = document.getElementById("game");
var scoreElement = document.querySelector("#score");

var interval;
var both = 0;
let counter = 0;
let currentBlocks = [];

function moveLeft() {
  var left = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );
  if (left > 0) {
    character.style.left = left - 3 + "px";
  }
}

function moveRight() {
  var left = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );
  if (left < 380) {
    character.style.left = left + 3 + "px";
  }
}

document.addEventListener("keydown", (event) => {
  if (both === 0) {
    both++;
    if (event.key === "ArrowLeft") {
      interval = setInterval(moveLeft, 1);
    }
    if (event.key === "ArrowRight") {
      interval = setInterval(moveRight, 1);
    }
  }
});

document.addEventListener("keyup", (event) => {
  clearInterval(interval);
  both = 0;
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    moveLeft();
  }
  if (event.key === "ArrowRight") {
    moveRight();
  }
});

var blocks = setInterval(function () {
  var blockLast = document.getElementById("block" + (counter - 1));
  var holeLast = document.getElementById("hole" + (counter - 1));
  if (counter > 0) {
    var blockLastTop = parseInt(
      window.getComputedStyle(blockLast).getPropertyValue("top")
    );
    var holeLastTop = parseInt(
      window.getComputedStyle(holeLast).getPropertyValue("top")
    );
  }
  if (blockLastTop < 400 || counter === 0) {
    var block = document.createElement("div");
    var hole = document.createElement("div");
    block.setAttribute("class", "block");
    hole.setAttribute("class", "hole");
    block.setAttribute("id", "block" + counter);
    hole.setAttribute("id", "hole" + counter);
    block.style.top = blockLastTop + 100 + "px";
    hole.style.top = holeLastTop + 100 + "px";
    var random = Math.floor(Math.random() * 360);
    hole.style.left = random + "px";
    game.appendChild(block);
    game.appendChild(hole);
    currentBlocks.push(counter);
    counter++;
  }
  // Declarado fora da função

  function getHitHole(character) {
    var characterRect = character.getBoundingClientRect();
    

    for (var i = 0; i < currentBlocks.length; i++) {
      var hole = document.getElementById("hole" + currentBlocks[i]);
      var holeRect = hole.getBoundingClientRect();

      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      var colors = ['#FF5733', '#33FF57', '#6A5ACD', '#FF0733', '#40E0D0', '#006400', '#FF00FF'];
      var randomColor = colors[getRandomInt(0, colors.length - 1)];
      

      if (
        characterRect.top < holeRect.bottom &&
        characterRect.bottom > holeRect.bottom &&
        !hole.hit
      ) {
        // Verifique se o hole já foi atingido
        hole.hit = true;
        hole.style.backgroundColor = randomColor;
        return scoreElement.innerHTML = "Score: " + (counter - 4); // Retorna o valor do contador
      }
      
    }
    
    return null;
  }

  getHitHole(character);

  var characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  var characterLeft = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );
  var drop = 0;

  
  
  for (let i = 0; i < currentBlocks.length; i++) {
    var current = currentBlocks[i];
    var iBlock = document.getElementById("block" + current);
    var iHole = document.getElementById("hole" + current);
    var iBlockTop = parseFloat(
      window.getComputedStyle(iBlock).getPropertyValue("top")
    );
    var iHoleLeft = parseFloat(
      window.getComputedStyle(iHole).getPropertyValue("left")
    );
    iBlock.style.top = iBlockTop - 0.5 + "px";
    iHole.style.top = iBlockTop - 0.5 + "px";
    if (iBlockTop < -20) {
      currentBlocks.shift();
      iBlock.remove();
      iHole.remove();
    }
    if (iBlockTop - 20 < characterTop && iBlockTop > characterTop) {
      drop++;
      if (iHoleLeft <= characterLeft && iHoleLeft + 20 >= characterLeft) {
        drop = 0;
      }
    }
  }
  if (drop === 0) {
    if (characterTop < 480) {
      character.style.top = characterTop + 1 + "px";
    }
  } else {
    character.style.top = characterTop - 0.5 + "px";
  }
}, 1);
