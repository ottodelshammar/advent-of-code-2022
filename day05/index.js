import fs from 'fs'

const inputDataLinesIntegers = (filename = "input.txt") => {
    return fs.readFileSync(filename).toString().split("\n\n").map(e => e.split("\n").map(e => e.replaceAll("move ", "").replaceAll("from ", "").replaceAll("to ", "").split(" ").map(e => parseInt(e)))).slice(1)[0]
}

const crates = [
    ['S', 'M', 'R', 'N', 'W', 'J', 'V', 'T'],
    ['B', 'W', 'D', 'J', 'Q', 'P', 'C', 'V'],
    ['B', 'J', 'F', 'H', 'D', 'R', 'P'],
    ['F', 'R', 'P', 'B', 'M', 'N', 'D'],
    ['H', 'V', 'R', 'P', 'T', 'B'],
    ['C', 'B', 'P', 'T'],
    ['B', 'J', 'R', 'P', 'L'],
    ['N', 'C', 'S', 'L', 'T', 'Z', 'B', 'W'],
    ['L', 'S', 'G']
]

const getTopCrates = (crates) => {
    const topCrates = [];
    crates.forEach(crate => topCrates.push(crate.pop()))
    return topCrates.join('');
}

const moveCrates = (crates, move) => {
    for (let m = 0; m < move[0]; m++) {
        crates[move[2] - 1].push(crates[move[1] - 1].pop())
    }
}

const moveMultipleCrates = (crates, move) => {
    const toMove = [];
    for(let i = 0; i < move[0]; i++){
        toMove.push(crates[move[1]-1].pop());
    }
    crates[move[2]-1] = crates[move[2]-1].concat(toMove.reverse())  
}

const getSolutionPart1 = () => {
    const moves = inputDataLinesIntegers();
    moves.forEach(move => moveCrates(crates, move))
    return getTopCrates(crates);
}

const getSolutionPart2 = () => {
    const moves = inputDataLinesIntegers();
    moves.forEach(move => moveMultipleCrates(crates, move))
    return getTopCrates(crates)
}

console.log("Javascript")
const part = process.env.part || "part2"

if (part === "part1")
    console.log(getSolutionPart1())
else
    console.log(getSolutionPart2())