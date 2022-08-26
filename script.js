let cells = document.querySelectorAll(".cell");
let winner = document.querySelector(".winner");
let gameStatus;
let restart = document.querySelector("button");
restart.addEventListener("click", () => {
  gameBoard.reset();
});

const Player = (name, number) => {
  return { name, number };
};
let p1Name = document.querySelector(".p1");
p1Name.addEventListener("change", () => {
  player1.name = p1Name.value;
});
const player1 = Player(p1Name, 1);

let p2Name = document.querySelector(".p2");
p2Name.addEventListener("change", () => {
  player2.name = p2Name.value;
});
const player2 = Player(p2Name, 2);

const gameBoard = (() => {
  let gameboard = ["", "", "", "", "", "", "", "", ""];
  let player = 1;
  const setGameboard = (() => {
    for (let i = 0; i < gameboard.length; i++) {
      cells[i].addEventListener("click", () => {
        if (
          player === 1 &&
          gameboard[i] === "" &&
          gameStatus != "over" &&
          gameStatus != "frozen"
        ) {
          gameboard[i] = "x";
          displayController.setDisplay();
          player = 2;
        } else if (
          player === 2 &&
          gameboard[i] === "" &&
          gameStatus != "over" &&
          gameStatus != "frozen"
        ) {
          gameboard[i] = "o";
          displayController.setDisplay();
          player = 1;
        }
      });
    }
  })();

  const freeze = () => {
    gameStatus = "frozen";
  };

  const reset = () => {
    for (let i = 0; i < gameboard.length; i++) {
      gameboard[i] = "";
    }
    displayController.setDisplay();
    player = 1;
    gameStatus = "new";
    winner.innerHTML = "";
  };
  return { gameboard, setGameboard, reset, freeze };
})();

const displayController = (() => {
  const gameboard = gameBoard.gameboard;
  const setDisplay = () => {
    for (let i = 0; i < gameboard.length; i++) {
      const cell = document.querySelectorAll(".cell")[i];
      cell.innerHTML = gameboard[i];
    }
  };
  return { setDisplay };
})();

const gameFlow = (() => {
  const gameboard = gameBoard.gameboard;
  const setWinner = (player) => {
    if (player.name.length > 0) {
      winner.textContent = `${player.name} wins !`;
      gameBoard.freeze();
    } else {
      winner.textContent = `Player${player.number} wins !`;
      gameBoard.freeze();
    }
  };
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", () => {
      if (
        gameboard[0] === "x" &&
        gameboard[1] === "x" &&
        gameboard[2] === "x"
      ) {
        setWinner(player1);
      } else if (
        gameboard[3] === "x" &&
        gameboard[4] === "x" &&
        gameboard[5] === "x"
      ) {
        setWinner(player1);
      } else if (
        gameboard[6] === "x" &&
        gameboard[7] === "x" &&
        gameboard[8] === "x"
      ) {
        setWinner(player1);
      } else if (
        gameboard[0] === "x" &&
        gameboard[3] === "x" &&
        gameboard[6] === "x"
      ) {
        setWinner(player1);
      } else if (
        gameboard[1] === "x" &&
        gameboard[4] === "x" &&
        gameboard[7] === "x"
      ) {
        setWinner(player1);
      } else if (
        gameboard[2] === "x" &&
        gameboard[5] === "x" &&
        gameboard[8] === "x"
      ) {
        setWinner(player1);
      } else if (
        gameboard[0] === "x" &&
        gameboard[4] === "x" &&
        gameboard[8] === "x"
      ) {
        setWinner(player1);
      } else if (
        gameboard[2] === "x" &&
        gameboard[4] === "x" &&
        gameboard[6] === "x"
      ) {
        setWinner(player1);
      } else if (
        gameboard[0] === "o" &&
        gameboard[1] === "o" &&
        gameboard[2] === "o"
      ) {
        setWinner(player2);
      } else if (
        gameboard[3] === "o" &&
        gameboard[4] === "o" &&
        gameboard[5] === "o"
      ) {
        setWinner(player2);
      } else if (
        gameboard[6] === "o" &&
        gameboard[7] === "o" &&
        gameboard[8] === "o"
      ) {
        setWinner(player2);
      } else if (
        gameboard[0] === "o" &&
        gameboard[3] === "o" &&
        gameboard[6] === "o"
      ) {
        setWinner(player2);
      } else if (
        gameboard[1] === "o" &&
        gameboard[4] === "o" &&
        gameboard[7] === "o"
      ) {
        setWinner(player2);
      } else if (
        gameboard[2] === "o" &&
        gameboard[5] === "o" &&
        gameboard[8] === "o"
      ) {
        setWinner(player2);
      } else if (
        gameboard[0] === "o" &&
        gameboard[4] === "o" &&
        gameboard[8] === "o"
      ) {
        setWinner(player2);
      } else if (
        gameboard[2] === "o" &&
        gameboard[4] === "o" &&
        gameboard[6] === "o"
      ) {
        setWinner(player2);
      } else if (!gameboard.includes("")) {
        winner.textContent = `Draw !`;
        gameBoard.freeze();
      }
    });
  }
})();
