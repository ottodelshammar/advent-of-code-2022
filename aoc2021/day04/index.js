import fs from 'fs'

const inputDataLinesIntegers = (filename = "input.txt") => {
    return fs.readFileSync(filename).toString().trim().split("\n\n");//;
};


const getNumbers = () => {
    const numbers = inputDataLinesIntegers()[0].split(",").map(e => parseInt(e));
    return numbers;
}

const getBoards = () => {
    const boards = inputDataLinesIntegers().map(e => e.split("\n").map(e => e.trim().replaceAll("  ", " ").split(" ").map(e => parseInt(e))))
    boards.shift();
    return boards;
}

const checkRow = (board, index) => {
    var count = 0;
    for (let n = 0; n < 5; n++) {
        if (board[index][n] < 0) {
            count++;
        }
    }
    return count;
}

const checkCol = (board, index) => {
    var count = 0;
    for (let n = 0; n < 5; n++) {
        if (board[n][index] < 0) {
            count++;
        }
    }
    return count;
}

const checkFiveInRow = (board, boardRef) => {
    var rowCount = 0;
    var colCount = 0;
    for (let i = 0; i < 5; i++) {
        rowCount = checkRow(board, i);
        if (rowCount >= 5) {
            return true;
        }
        colCount = checkCol(board, i);
        if (colCount >= 5) {
            return true;
        }
    }
    false;
}

const getBoardValue = (board) => {
    var value = 0;
    board.map(row => row.map(val => {
        if (val > 0) {
            value += val;
        }
    }))
    return value;
}

const getWinningBoard = (boards, boardsRef, numbers) => {
    var winningIndex;
    var winningBoard;
    var winningValue;

    try {
        numbers.forEach(number => {
            boards.forEach((board, index) => {
                for (let row = 0; row < 5; row++) {
                    for (let col = 0; col < 5; col++) {
                        if (board[row][col] == number) {
                            board[row][col] = -1;

                            if (checkFiveInRow(board, boardsRef[index])) {
                                winningBoard = board;
                                winningIndex = index;
                                winningValue = boardsRef[index][row][col];
                                throw 'Quit!';
                            }
                        }
                    }
                }
            });
        });
    } catch (quit) {
        return [winningBoard, winningValue, winningIndex];
    }
}

const getSolutionPart1 = () => {
    const boards = getBoards();
    const boardsRef = getBoards();
    const numbers = getNumbers();

    const winningData = getWinningBoard(boards, boardsRef, numbers);
    const winningBoard = winningData[0];
    const winningValue = winningData[1];
    const finalValue = winningValue*getBoardValue(winningBoard);
    
    console.log(finalValue);
    return finalValue;
};
//getSolutionPart1();

const getSolutionPart2 = () => {
    const boards = getBoards();
    const boardsRef = getBoards();
    const numbers = getNumbers();

    while(boards.length > 1){
        const winningBoardIndex = getWinningBoard(boards, boardsRef, numbers)[2];
        boards.splice(winningBoardIndex, 1);
        boardsRef.splice(winningBoardIndex, 1);
    }

    const lastWinningBoardData = getWinningBoard(boards, boardsRef, numbers);
    const lastWinningBoard = lastWinningBoardData[0];
    const lastWinningValue = lastWinningBoardData[1];
    const finalValue = lastWinningValue*getBoardValue(lastWinningBoard);

    console.log(finalValue)
    return finalValue;

}
getSolutionPart2();