import fs from 'fs'

const inputDataLinesIntegers = (filename = "input.txt") => {
    return fs.readFileSync(filename).toString().trim().split("\n").map(e => e.split(" "));
}

const getSolutionPart1 = () => {
    var score = 0;
    inputDataLinesIntegers().forEach(e => {
        if (e[1] == 'X') {
            score += 1
            if (e[0] == 'A') {
                score += 3;
            } else if (e[0] == 'C') {
                score += 6;
            }
        } else if (e[1] == 'Y') {
            score += 2;
            if (e[0] == 'B') {
                score += 3;
            } else if (e[0] == 'A') {
                score += 6;
            }
        } else if (e[1] == 'Z') {
            score += 3;
            if (e[0] == 'C') {
                score += 3;
            } else if (e[0] == 'B') {
                score += 6;
            }
        }
    });
    return score;
}

const getSolutionPart2 = () => {
    var score = 0;
    inputDataLinesIntegers().forEach(e => {
        if (e[1] == 'X') {
            if (e[0] == 'A') {
                score += 3;
            } else if (e[0] == 'B') {
                score += 1;
            } else if (e[0] == 'C') {
                score += 2;
            }
        } else if (e[1] == 'Y') {
            score += 3;
            if (e[0] == 'A') {
                score += 1;
            } else if (e[0] == 'B') {
                score += 2;
            } else if (e[0] == 'C') {
                score += 3;
            }
        } else if (e[1] == 'Z') {
            score += 6;
            if (e[0] == 'A') {
                score += 2;
            } else if (e[0] == 'B') {
                score += 3;
            } else if (e[0] == 'C') {
                score += 1;
            }
        }
    });
    return score;
}

console.log("Javascript")
const part = process.env.part || "part1"

if (part === "part1")
    console.log(getSolutionPart1())
else
    console.log(getSolutionPart2())