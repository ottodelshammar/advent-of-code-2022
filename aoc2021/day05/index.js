import fs from 'fs'

const inputDataLinesIntegers = (filename = "input.txt") => {
    return fs.readFileSync(filename).toString().trim().replaceAll(" -> ", ",").split("\n").map(e => e.split(",").map(e => parseInt(e)));
};

const createZeroPaddedMatrix = () => {
    const size = 1000
    const matrix = new Array(size)
    for (let i = 0; i < size; i++) {
        matrix[i] = new Array(size);
        for (let j = 0; j < size; j++) {
            matrix[i][j] = 0;
        }
    }
    return matrix;
}

const getLineCoordinates = (coordinates) => {
    const xStart = coordinates[0];
    const yStart = coordinates[1];
    const xFinish = coordinates[2];
    const yFinish = coordinates[3];
    const xDiff = Math.abs(xStart - xFinish);
    const yDiff = Math.abs(yStart - yFinish);
    const lineCoordinates = [];

    if (xDiff == 0 && yFinish > yStart) {
        for (let diff = 0; diff <= yDiff; diff++) {
            lineCoordinates.push([xStart, (yStart + diff)]);
        }
    }

    if (xDiff == 0 && yFinish < yStart) {
        for (let diff = 0; diff <= yDiff; diff++) {
            lineCoordinates.push([xStart, (yStart - diff)]);
        }
    }

    if (yDiff == 0 && xFinish > xStart) {
        for (let diff = 0; diff <= xDiff; diff++) {
            lineCoordinates.push([(xStart + diff), yStart]);
        }
    }

    if (yDiff == 0 && xFinish < xStart) {
        for (let diff = 0; diff <= xDiff; diff++) {
            lineCoordinates.push([(xStart - diff), yStart]);
        }
    }

    return lineCoordinates;
}

const getDiagonalCoordinates = (coordinates) => {
    const xStart = coordinates[0];
    const yStart = coordinates[1];
    const xFinish = coordinates[2];
    const yFinish = coordinates[3];
    const xDiff = Math.abs(xStart - xFinish);
    const yDiff = Math.abs(yStart - yFinish);
    const diagonalCoordinates = [];

    if (xDiff != 0 && yDiff != 0 && xFinish > xStart && yFinish > yStart) {
        for (let diff = 0; diff <= xDiff; diff++) {
            diagonalCoordinates.push([(xStart + diff), (yStart + diff)]);
        }
    }

    if (xDiff != 0 && yDiff != 0 && xFinish < xStart && yFinish < yStart) {
        for (let diff = 0; diff <= xDiff; diff++) {
            diagonalCoordinates.push([(xStart - diff), (yStart - diff)]);
        }
    }


    if (xDiff != 0 && yDiff != 0 && xFinish > xStart && yFinish < yStart) {
        for (let diff = 0; diff <= xDiff; diff++) {
            diagonalCoordinates.push([(xStart + diff), (yStart - diff)]);
        }
    }


    if (xDiff != 0 && yDiff != 0 && xFinish < xStart && yFinish > yStart) {
        for (let diff = 0; diff <= xDiff; diff++) {
            diagonalCoordinates.push([(xStart - diff), (yStart + diff)]);
        }
    }
    return diagonalCoordinates;
}

const getLineOverlapp = (matrix) => {
    var count = 0;
    const size = 1000;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (matrix[i][j] > 1) {
                count++;
            }
        }
    }
    return count;
}

const getSolutionPart1 = () => {
    const coordinatesList = inputDataLinesIntegers();
    const matrix = createZeroPaddedMatrix();

    coordinatesList.forEach(coordinates => {
        const lineCoordinates = getLineCoordinates(coordinates);
        lineCoordinates.forEach(coordinate => {
            matrix[coordinate[0]][coordinate[1]]++;
        })
    });
    const lineOverlapp = getLineOverlapp(matrix);
    console.log(lineOverlapp);
    return lineOverlapp;
}
getSolutionPart1();

const getSolutionPart2 = () => {
    const coordinatesList = inputDataLinesIntegers();
    const matrix = createZeroPaddedMatrix();

    coordinatesList.forEach(coordinates => {
        const lineCoordinates = getLineCoordinates(coordinates);
        lineCoordinates.forEach(coordinate => {
            matrix[coordinate[0]][coordinate[1]]++;
        })
        const diagonalCoordinates = getDiagonalCoordinates(coordinates);
        diagonalCoordinates.forEach(coordinate => {
            matrix[coordinate[0]][coordinate[1]]++;
        })
    });
    const lineOverlapp = getLineOverlapp(matrix);
    console.log(lineOverlapp);
    return lineOverlapp;
}
getSolutionPart2();