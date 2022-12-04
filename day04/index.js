import fs from 'fs'

const inputDataLinesIntegers = (filename = "input.txt") => {
    return fs.readFileSync(filename).toString().trim().replaceAll("-", ",").split("\n").map(e => e.split(",").map(e => parseInt(e)))
}

const getSolutionPart1 = () => {
    var count = 0;
    const elves = inputDataLinesIntegers();
    elves.forEach(section => {
        if (section[0] >= section[2] && section[1] <= section[3] || section[0] <= section[2] && section[1] >= section[3]) {
            count += 1;
        }
    });
    return count;
}

const getSolutionPart2 = () => {
    var count = 0;
    const elves = inputDataLinesIntegers();
    elves.forEach(section => {
        if (section[0] <= section[3] && section[1] >= section[2]) {
            count += 1;
        }
    });
    return count;
}

console.log("Javascript")
const part = process.env.part || "part1"

if (part === "part1")
    console.log(getSolutionPart1())
else
    console.log(getSolutionPart2())