let board = ['c11', 'c12', 'c13', 'c21', 'c22', 'c23', 'c31', 'c32', 'c33'];
let currentPlayer = 'X';
const game_board = [['', '', ''], ['', '', ''], ['', '', '']];

function cellClick(row, col, id) {
    if (board.includes(id) && game_board[row][col] === '') {
        let btn = document.getElementById(id);
        btn.textContent = currentPlayer;
        game_board[row][col] = currentPlayer;
        let index = board.indexOf(id);
        if (index !== -1) {
            board.splice(index, 1);
        }
        if (CheckWin()) {
            let result = document.getElementsByClassName('result')[0];
            result.textContent = `Player ${currentPlayer} wins`;
            return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function ResetBoard() {
    board = ['c11', 'c12', 'c13', 'c21', 'c22', 'c23', 'c31', 'c32', 'c33'];
    let AllBtn = document.getElementsByTagName("button");
    for (let i = 0; i < AllBtn.length-1; i++) {
        AllBtn[i].textContent = "";
    }
    let result = document.getElementsByClassName('result')[0];
    result.textContent = "";
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    game_board.forEach((row, i) => {
        row.forEach((col, j) => {
            game_board[i][j] = '';
        });
    });
}

function CheckWin() {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (game_board[i][0] === currentPlayer && game_board[i][1] === currentPlayer && game_board[i][2] === currentPlayer) {
            return true;
        }
    }
    // Check columns
    for (let i = 0; i < 3; i++) {
        if (game_board[0][i] === currentPlayer && game_board[1][i] === currentPlayer && game_board[2][i] === currentPlayer) {
            return true;
        }
    }
    // Check diagonals
    if (game_board[0][0] === currentPlayer && game_board[1][1] === currentPlayer && game_board[2][2] === currentPlayer) {
        return true;
    }
    if (game_board[0][2] === currentPlayer && game_board[1][1] === currentPlayer && game_board[2][0] === currentPlayer) {
        return true;
    }
    return false;
}