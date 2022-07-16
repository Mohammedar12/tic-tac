let turn = "X";
let title = document.querySelector(".header h1");
let xScore = document.querySelector(".xScore");
let oScore = document.querySelector(".oScore");
let resultMode;
let alertWin = document.querySelector(".winner-alert");
let alertTitle = document.querySelector(".alert h3");
let reload = document.querySelector(".reload");
let bodyBlock = document.querySelector(".body-block");
let square = [];
let arrXScore = [];
let arrOScore = [];

function end(num1, num2, num3) {
  title.innerHTML = `<span>${square[num1]}</span> Is Winner`;

  // colored winner box
  document.getElementById("item" + num1).classList.add("active-win");
  document.getElementById("item" + num2).classList.add("active-win");
  document.getElementById("item" + num3).classList.add("active-win");

  // Stop Click event
  bodyBlock.style.display = "block";

  // winner
  let wait = setInterval(function () {
    title.innerHTML += ".";
  }, 500);
  let timeOut = setTimeout(function () {
    clearInterval(wait);
    title.innerHTML = `<span>X O</span> GAME`;
    for (let i = 1; i < 10; i++) {
      document.getElementById("item" + i).innerHTML = "";
      // remove colored box
      document.getElementById("item" + i).classList.remove("active-win");
    }
    bodyBlock.style.display = "none";
  }, 1500);

  //Score
  resultMode = square[num1];
  if (resultMode === "X") {
    arrXScore.push("x");
    xScore.innerHTML = `<span class="xScore">X : ${arrXScore.length}</span>`;

    // alert winner
    if (arrXScore.length === 3) {
      alertWin.style.display = "flex";
      bodyBlock.style.display = "none";
      title.innerHTML = `<span>X O</span> GAME`;
      alertTitle.innerHTML = ` <h3>${resultMode} الفائز هو </h3>`;
      clearInterval(wait);
      clearTimeout(timeOut);
    }
  } else if (resultMode === "O") {
    arrOScore.push("o");
    oScore.innerHTML = `<span class="oScore">O : ${arrOScore.length}</span>`;

    // alert winner
    if (arrOScore.length === 3) {
      alertWin.style.display = "flex";
      bodyBlock.style.display = "none";
      title.innerHTML = `<span>X O</span> GAME`;
      alertTitle.innerHTML = ` <h3>${resultMode} الفائز هو </h3>`;
      clearInterval(wait);
      clearTimeout(timeOut);
    }
  }

  reload.onclick = function () {
    location.reload();
  };
}

function drew() {
  title.innerHTML = `<span>DR</span>AW`;
  let wait = setInterval(function () {
    title.innerHTML += ".";
  }, 500);
  setTimeout(function () {
    clearInterval(wait);
    title.innerHTML = `<span>X O</span> GAME`;
    for (let i = 1; i < 10; i++) {
      document.getElementById("item" + i).innerHTML = "";
    }
  }, 1500);
}

function result() {
  for (let i = 1; i < 10; i++) {
    square[i] = document.getElementById("item" + i).innerHTML;
  }
  if (square[1] === square[2] && square[2] === square[3] && square[2] !== "") {
    end(1, 2, 3);
    // document.getElementById("item" + 1).classList.add("active-win")
    // document.getElementById("item" + 2).classList.add("active-win")
    // document.getElementById("item" + 3).classList.add("active-win")
  } else if (
    square[4] === square[5] &&
    square[5] === square[6] &&
    square[5] !== ""
  ) {
    end(4, 5, 6);
    // document.getElementById("item" + 4).classList.add("active-win")
    // document.getElementById("item" + 5).classList.add("active-win")
    // document.getElementById("item" + 6).classList.add("active-win")
  } else if (
    square[7] === square[8] &&
    square[8] === square[9] &&
    square[8] !== ""
  ) {
    end(7, 8, 9);
    // document.getElementById("item" + 7).classList.add("active-win")
    // document.getElementById("item" + 8).classList.add("active-win")
    // document.getElementById("item" + 3).classList.add("active-win")
  } else if (
    square[1] === square[4] &&
    square[4] === square[7] &&
    square[4] !== ""
  ) {
    end(1, 4, 7);
  } else if (
    square[2] === square[5] &&
    square[5] === square[8] &&
    square[5] !== ""
  ) {
    end(2, 5, 8);
  } else if (
    square[3] === square[6] &&
    square[6] === square[9] &&
    square[6] !== ""
  ) {
    end(3, 6, 9);
  } else if (
    square[1] === square[5] &&
    square[5] === square[9] &&
    square[5] !== ""
  ) {
    end(1, 5, 9);
  } else if (
    square[3] === square[5] &&
    square[5] === square[7] &&
    square[5] !== ""
  ) {
    end(3, 5, 7);
  } else if (
    (square[1] == "X" || square[1] == "O") &&
    (square[2] == "X" || square[2] == "O") &&
    (square[3] == "X" || square[3] == "O") &&
    (square[4] == "X" || square[4] == "O") &&
    (square[5] == "X" || square[5] == "O") &&
    (square[6] == "X" || square[6] == "O") &&
    (square[7] == "X" || square[7] == "O") &&
    (square[8] == "X" || square[8] == "O") &&
    (square[9] == "X" || square[9] == "O")
  ) {
    drew();
  }
}

function game(id) {
  let box = document.getElementById(id);
  if (turn === "X" && box.innerHTML === "") {
    title.innerHTML = `<span>O</span> Turn`;
    box.innerHTML = turn;
    turn = "O";
  }
  if (turn === "O" && box.innerHTML === "") {
    title.innerHTML = `<span>X</span> Turn`;
    box.innerHTML = turn;
    turn = "X";
  }
  result();
}
