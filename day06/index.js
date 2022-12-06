import fs from 'fs'

const inputDataLinesIntegers = (filename = "input.txt") => {
    return fs.readFileSync(filename).toString().split("");
}

const containsDuplicates = (array) => {
    const result = array.some(element => {
        if (array.indexOf(element) !== array.lastIndexOf(element)) {
            return true;
        }
        return false;
    });
    return result;
}

const getSolutionPart1 = () => {
    const characters = inputDataLinesIntegers();
    var marker = [];
    var index = 0;
    for (let i = 0; i < characters.length; i++) {
        marker = [characters[0 + i], characters[1 + i], characters[2 + i], characters[3 + i]];
        if (!containsDuplicates(marker)) {
            index = i;
            break;
        }
    }
    return index + 4;
}

const getSolutionPart2 = () => {
    const characters = inputDataLinesIntegers();
    var marker = [];
    var index = 0;
    for (let i = 0; i < characters.length; i++) {
        marker = [characters[0 + i], characters[1 + i], characters[2 + i], characters[3 + i], characters[4 + i], characters[5 + i], characters[6 + i], characters[7 + i], characters[8 + i], characters[9 + i], characters[10 + i], characters[11 + i], characters[12 + i], characters[13 + i]];
        if (!containsDuplicates(marker)) {
            index = i;
            break;
        }
    }
    return index + 14;
}

console.log("Javascript")
const part = process.env.part || "part2"

if (part === "part1")
    console.log(getSolutionPart1())
else
    console.log(getSolutionPart2())