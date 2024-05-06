const squares = document.querySelectorAll('.square');
const moveBtn = document.getElementsByClassName(".move-btn");
const cardTitle = document.getElementById( "card-title" );
const cardLine = document.getElementById("card-line");
const cardSubtitle = document.getElementById("card-subtitle");
const cardInputPiece = document.getElementById("card-subtitle");
const cardInputFromPOS = document.getElementById("card-input-fromPOS");
const cardInputToPOS = document.getElementById("card-input-toPOS");
const cardBtn = document.getElementById("card-btn");
const cardBtnTitle = document.getElementById("btn-title");
let currentPlayer = "white";
// initializing variables and necessary HTML elements

class Piece {
  constructor (type, color, pos) {
      this.type = type;
      this.color = color;
      this.position = pos;
  }
  getType() {
      return this.type;
  }
  getColor() {
      return this.color;
  }
  getPOS() {
      return this.position;
  }
}
class Pawn extends Piece {
  constructor (type, color, pos) {
      super(type, color, pos);
  }

  avaliableMoves() {
    const result = [];
    let diagonals = [];
    if (this.getColor() === "white") {
      if (this.position - 1 + 100 > 100 && this.position - 1 + 100 < 808) {
        if (this.position - 1 + 100 > Math.round(this.position / 100) * 100 + 100 && this.position - 1 + 100 < Math.round(this.position / 100) * 100 + 100 + 9) {
          diagonals.push(this.position - 1 + 100);
        }
      } if (this.position + 1 + 100 > 100 && this.position + 1 + 100 < 808) {
          if (this.position + 1 + 100 > Math.round(this.position / 100) * 100 && this.position + 1 + 100 < Math.round(this.position / 100) * 100 + 100 + 9) {
            diagonals.push(this.position + 1 + 100);
          } 
      } squares.forEach(square => {
        if (square.id == (this.position + 100)) {
          if (square.innerText.length == 0) {
            result.push(square.id);
          }
        } for (let i = 0; i < diagonals.length; i++) {
          if (square.id == diagonals[i]) {
            if (square.innerText.length != 0) {   
              if (square.innerText.slice(0, 5) == "black") {
                result.push(diagonals[i]);
              }
            }
          }                
        }
      });
      if (this.position > 200 && this.position < 209) {
        squares.forEach(square => {
          if (square.id == this.position + 200) {
            if (square.innerText.length == 0) {
              result.push(square.id);
            }
          }
        })
      }
      return result;
    } else if (this.getColor() === "black") {
      if (this.position - 1 - 100 > 100 && this.position - 1 - 100 < 808) {
        if (this.position - 1 - 100 > Math.round(this.position / 100) * 100 - 100 && this.position - 1 - 100 < Math.round(this.position / 100) * 100 - 100 + 9) {
          diagonals.push(this.position - 1 - 100);
        }
      } if (this.position + 1 - 100 > 100 && this.position + 1 - 100 < 808) {
        if (this.position + 1 - 100 > Math.round(this.position / 100) * 100 && this.position + 1 - 100 < Math.round(this.position / 100) * 100 - 100 + 9) {
          diagonals.push(this.position + 1 - 100);
        }
      } squares.forEach(square => {
        if (square.id == (this.position - 100)) {
          if (square.innerText.length == 0) {
            result.push(square.id);
          }
        } for (let i = 0; i < diagonals.length; i++) {
          if (square.id == diagonals[i]) {
            if (square.innerText.length != 0) {   
              if (square.innerText.slice(0, 5) == "black") {
                result.push(diagonals[i]);
              }
            }
          }                
        }
      });
      if (this.position > 600 && this.position < 609) {
        squares.forEach(square => {
          if (square.id == this.position - 200) {
            if (square.innerText.length == 0) {
              result.push(square.id);
            }
          }
        })
      }
      return result;
    }
  }

  move(fromPOS, toPOS) {
      console.log("hello");
  }
}
class Bishop extends Piece {
  constructor(type, color, pos, square) {
    super(type, color, pos);
    this.square = square;
  }

  getSquare() {
    return this.square;
  }
  
  avaliableMoves() {
    const result = [];
    let rightDiagonals = [];
    let leftDiagonals = [];
    let diagonals = [];
    for (let i = 1; i <= 8; i++) {
      rightDiagonals.push(this.position + (100 * i + i));
      leftDiagonals.push(this.position + (100 * i - i));
    } for (let i = 1; i <= 8; i++) {
      rightDiagonals.push(this.position - (100 * i + i));
      leftDiagonals.push(this.position - (100 * i - i));
    }
    console.log("Bishop Right Diagonals: " + rightDiagonals);
    console.log("Bishop Left Diagonals" + leftDiagonals);
    
  }
}
class Knight extends Piece {
  constructor(type, color, pos, square) {
      super(type, color, pos);
      this.square = square;
  }

  getSquare() {
    return this.square;
  }
  
  avaliableMoves() {
    let result = [];
    let knightMoves = [];
    let knightDefinite = [];
    knightMoves.push(this.position + 200 + 1);
    knightMoves.push(this.position + 200 - 1);
    knightMoves.push(this.position + 100 - 2);
    knightMoves.push(this.position + 100 + 2);
    knightMoves.push(this.position - 100 + 2);
    knightMoves.push(this.position - 100 - 2);
    knightMoves.push(this.position - 200 + 1);
    knightMoves.push(this.position - 200 - 1);
    for (let i = 0; i < knightMoves.length; i++) {
      if (knightMoves[i] > 100 && knightMoves[i] < 809) {
        knightDefinite.push(knightMoves[i]);
      }
    } squares.forEach(square => {
      if (this.getColor() == "white") {
        for (let i = 0; i < knightDefinite.length; i++) {
          if (square.id == knightMoves[i]) {
            if (square.innerText.length != 0) {
              if (square.innerText.slice(0, 5) == "black") {
                result.push(knightDefinite[i]);
              }
            } else if (square.innerText.length == 0) {
              result.push(knightDefinite[i]);
            }
          }
        }
      } else if (this.getColor() == "black") {
        for (let i = 0; i < knightDefinite.length; i++) {
          if (square.id == knightMoves[i]) {
            if (square.innerText.length != 0) {
              if (square.innerText.slice(0, 5) == "white") {
                result.push(knightDefinite[i]);
              }
            } else if (square.innerText.length == 0) {
              result.push(knightDefinite[i]);
            }
          }
        }
      } 
    });
    return result;
  }
}
class Rook extends Piece {
  constructor (type, color, pos, square) {
      super(type, color, pos);
      this.square = square;
  }

  getSquare() {
    return this.square;
  }

  avaliableMoves () {
    let result = [];
    let horizontals = [];
    let verticals = [];
    for (let i = 1; i <= 8; i++) {
      verticals.push(this.position + (100 * i));
      horizontals.push(this.position + i);
    } for (let i = 1; i <= 8; i++) {
      verticals.push(this.position - (100 * i));
      horizontals.push(this.position - i);
    }
    console.log(verticals);
    console.log(horizontals);
  }
}
class Queen extends Piece {
  constructor (type, color, pos) {
      super(type, color, pos);
  }

  avaliableMoves () {

  }
}
class King extends Piece {
  constructor (type, color, pos) {
      super(type, color, pos);
  }

  avaliableMoves () {
    let result = [];
    let potentialMoves = [];
  }
}

function pieces() { // function to put images of pieces onto the grid in their respective places
    document.querySelectorAll(".square").forEach(piece => { // for each square in grid
        if (piece.innerText.length !== 0) { // if length is not 0
            piece.innerHTML = `${piece.innerText} <img src="./assets/${piece.innerText}.png" alt="">`; // add image corresponding to the text
            piece.style.cursor = 'pointer'; // add style pointer
        }
    });
}

function boardColor() { // function to color the board
  squares.forEach(square => { // for each square
      arr = Array.from(square.id); // get id of each square
      // console.log(arr);
      i = eval(arr.pop()) + eval(arr.shift()); // formula to alternate
      if (i % 2 == 0) { // if formula results to even
          square.style.backgroundColor = 'rgb(214,199,191)';
      }
       if (i % 2 !== 0) { // if formula results to odd
          square.style.backgroundColor = 'rgb(107, 65, 43)';
      }
  });
}
// end of creating chessboard
function changePlayer(player) { // function to change the player
  // player == "white" ? player = "black" : player = "white";
  if (player === "white") {
    document.body.style.backgroundColor = "#26190b";
    cardTitle.style.color = "white";
    cardTitle.innerText = "Black's Turn";
    cardLine.style.borderColor = "#ffffff";
    cardLine.style.backgroundColor = "#ffffff";
    cardSubtitle.style.color = "#ffffff";
    cardBtn.style.backgroundColor = "#ffffff";
    cardBtn.style.border = "0.08em solid #26190b";
    cardBtnTitle.style.color = "#26190b";
    cardBtnTitle.style.border = "0.08em solid #26190b";
    cardBtnTitle.style.backgroundColor = "#ffffff";
    cardBtnTitle.style.boxShadow = "0 0.4em 0.1em 0.019em #26190b";
    // cardBtn.style.backgroundColor = "#ffffff";
    // cardBtn.style.border = "0.08em solid #26190b";
    // cardInputPiece.addEventListener("focus", function () {
    //   this.style.backgroundColor = "#454040";
    //   this.style.color = "#26190b";
    // })
    // cardInputPiece.styleSheet.cssText = "#card-input-piece:focus {background-color: #ffffff; color: #26190b;}";
    currentPlayer = "black";
  } else if (player === "black") {
      document.body.style.backgroundColor = "#ffffff";
      cardTitle.style.color = "#26190b";
      cardTitle.innerText = "White's Turn";
      cardLine.style.borderColor = "#26190b";
      cardLine.style.backgroundColor = "#26190b";
      cardSubtitle.style.color = "#26190b";
      cardBtn.style.backgroundColor = "#26190b";
      cardBtn.style.border = "0.08em solid #ffffff";
      cardBtnTitle.style.color = "#ffffff";
      cardBtnTitle.style.border = "0.08em solid #ffffff";
      cardBtnTitle.style.backgroundColor = "#26190b";
      cardBtnTitle.style.boxShadow = "0 0.4em 0.1em 0.019em #ffffff";
      currentPlayer = "white";
  }
}
function game() {
  // change player test
  // console.log(currentPlayer);
  // changePlayer(currentPlayer); 
  // console.log(currentPlayer);

  // pawn object test
  // const pawn = new Pawn("Pawn", "white", 201);
  // console.log(pawn.getType());
  // console.log(pawn.getColor());
  // console.log(pawn.getPOS());
  // console.log(pawn.avaliableMoves());

  // bishop object test
  // const bishop = new Bishop("Bishop", "black", 503, "black");
  // console.log(bishop.getType());
  // console.log(bishop.getColor());
  // console.log(bishop.getPOS());
  // console.log(bishop.getSquare());
  // console.log(bishop.avaliableMoves());

  // knight object test
  // const knight = new Knight("Knight", "white", 107, "black");
  // console.log(knight.getType());
  // console.log(knight.getColor());
  // console.log(knight.getPOS());
  // console.log(knight.getSquare());
  // console.log(knight.avaliableMoves());

  // rook object test
  const rook = new Rook("Rook", "white", 108, "black");
  console.log(rook.getType());
  console.log(rook.getColor());
  console.log(rook.getPOS());
  console.log(rook.getSquare());
  console.log(rook.avaliableMoves());
}

pieces();
boardColor();
game();