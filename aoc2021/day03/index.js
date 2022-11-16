import fs from 'fs'

export const inputDataLinesIntegers = (filename = "input.txt") => {
    return fs.readFileSync(filename).toString().trim().split("\n");
};

export const getSolutionPart1 = () => {
    var ones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var gamma = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var epsilon = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    inputDataLinesIntegers().map(e => {
        for (let i = 0; i < 12; i++) {
            ones[i] += parseInt(e[i]);
            if (ones[i] > 500) {
                gamma[i] = 1;
                epsilon[i] = 0;
            }
        }
    })
    const gRate = parseInt(gamma.join(''), 2);
    const eRate = parseInt(epsilon.join(''), 2);

    console.log(eRate * gRate);
    return gRate * eRate;
};
getSolutionPart1();


const getOxygenValue = (binaryNumbersArray, index) => {
    var oneArray = [];
    var zeroArray = [];
    if (binaryNumbersArray.length == 1 || index > 12) {
        return binaryNumbersArray;
    } else {
        binaryNumbersArray.map(e => {
            if (e[index] == '1') {
                oneArray.push(e)
            } else {
                zeroArray.push(e);
            }
        });
        if (oneArray.length >= zeroArray.length) {
            return getOxygenValue(oneArray, index + 1);
        } else {
            return getOxygenValue(zeroArray, index + 1);
        }
    }
}

const getScrubberValue = (binaryNumbersArray, index) => {
    var oneArray = [];
    var zeroArray = [];
    if (binaryNumbersArray.length == 1 || index > 12) {
        return binaryNumbersArray;
    } else {
        binaryNumbersArray.map(e => {
            if (e[index] == '1') {
                oneArray.push(e)
            } else {
                zeroArray.push(e);
            }
        });
        if (zeroArray.length <= oneArray.length) {
            return getScrubberValue(zeroArray, index + 1);
        } else {
            return getScrubberValue(oneArray, index + 1);
        }
    }
}

export const getSolutionPart2 = () => {
    const binaryNumbersArray = inputDataLinesIntegers();
    const oxygenValue = getOxygenValue(binaryNumbersArray, 0);
    const oxygenRating = parseInt(oxygenValue[0], 2)
    console.log(oxygenRating);

    const scrubberValue = getScrubberValue(binaryNumbersArray, 0);
    const scrubberRating = parseInt(scrubberValue[0], 2);
    console.log(scrubberRating);

    console.log(oxygenRating*scrubberRating)
    return oxygenRating*scrubberRating;
};
getSolutionPart2();
