import fs from 'fs'

const inputDataLinesIntegers = (filename="input.txt") => {
    return fs.readFileSync(filename).toString().trim().split("\n").map((x)=>parseInt(x))
}

const getSolutionPart1 = () => {
    return inputDataLinesIntegers().reduce((x,y)=>x+y)
}

const getSolutionPart2 = () => {
    return inputDataLinesIntegers().reduce((x,y)=>x*y)
}

console.log("Javascript")
const part = process.env.part || "part1"

if (part === "part1")
    console.log(getSolutionPart1())
else
    console.log(getSolutionPart2())