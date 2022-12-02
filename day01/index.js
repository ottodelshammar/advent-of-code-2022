import fs from 'fs'

const inputDataLinesIntegers = (filename="input.txt") => {
    return fs.readFileSync(filename).toString().trim().split("\n\n").map(e => e.split("\n").map(e => parseInt(e)))
}

const getSolutionPart1 = () => {
    const totalCaloriesList = [];
    const input = inputDataLinesIntegers()
    input.forEach(e => totalCaloriesList.push(e.reduce((a, b) => a + b, 0)));
    const maxCalories = Math.max(...totalCaloriesList)
    return maxCalories
}

const getSolutionPart2 = () => {
    const totalCaloriesList = [];
    const input = inputDataLinesIntegers()
    input.forEach(e => totalCaloriesList.push(e.reduce((a, b) => a + b, 0)));
    totalCaloriesList.sort((a,b) => b-a);
    return totalCaloriesList[0]+totalCaloriesList[1]+totalCaloriesList[2];
}

console.log("Javascript")
const part = process.env.part || "part2"

if (part === "part1")
    console.log(getSolutionPart1())
else
    console.log(getSolutionPart2())