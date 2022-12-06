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

const findMarker = (width) => {
    const characters = inputDataLinesIntegers();
    for (let i = 0; i < characters.length; i++) {
        if (!containsDuplicates(characters.slice(i, i+width))) {
            var index = i;
            break;
        }
    }
    return index + width;
}

const getSolutionPart1 = () => {
    return findMarker(4);
}

const getSolutionPart2 = () => {
    return findMarker(14);
}

console.log("Javascript")
const part = process.env.part || "part2"

if (part === "part1")
    console.log(getSolutionPart1())
else
    console.log(getSolutionPart2())