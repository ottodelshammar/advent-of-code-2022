import fs from 'fs'

const inputDataLinesIntegers = (filename = 'input.txt') => {
    return fs.readFileSync(filename).toString().split('\n').map(e => e.split('').map(e => parseInt(e)))
}

const isVisible = (treeRow, treeIndex) => {
    for (let tree = 0; tree < treeIndex; tree++) {
        if (treeRow[tree] >= treeRow[treeIndex]) {
            return false;
        }
    }
    return true
}

const checkTreeVisibility = (forrest, row, col) => {
    if (isVisible([...forrest[row]], col) || isVisible([...forrest.map(f => f[col])], row) || isVisible([...forrest[row]].reverse(), [...forrest[row]].length - col - 1) || isVisible([...forrest.map(f => f[col])].reverse(), [...forrest.map(f => f[col])].length - row - 1)) {
        return true;
    }
    return false;
}

const getScoreInSingleDirection = (treeRow, treeIndex) => {
    var count = 0;
    for (let tree = treeIndex + 1; tree < treeRow.length; tree++) {
        if (treeRow[tree] >= treeRow[treeIndex]) {
            count += 1;
            return count;
        } else {
            count += 1;
        }
    }
    return count
}

const getScenicScore = (forrest, row, col) => {
    return getScoreInSingleDirection([...forrest[row]], col) * getScoreInSingleDirection([...forrest.map(f => f[col])], row) * getScoreInSingleDirection([...forrest.map(f => f[col])].reverse(), [...forrest.map(f => f[col])].length - row - 1) * getScoreInSingleDirection([...forrest[row]].reverse(), [...forrest[row]].length - col - 1);
}

const getSolutionPart1 = () => {
    const forrest = inputDataLinesIntegers();
    var visibleTreeCount = 0;
    for (let row = 0; row < forrest.length; row++) {
        for (let col = 0; col < forrest[0].length; col++) {
            if (checkTreeVisibility(forrest, row, col)) {
                visibleTreeCount += 1;
            }
        }
    }
    return visibleTreeCount;
}

const getSolutionPart2 = () => {
    const forrest = inputDataLinesIntegers();
    var highestScenicScore = 0;
    var currenScenicScore = 0;
    for (let row = 0; row < forrest.length; row++) {
        for (let col = 0; col < forrest[0].length; col++) {
            currenScenicScore = getScenicScore(forrest, row, col)
            if (currenScenicScore > highestScenicScore) {
                highestScenicScore = currenScenicScore;
            }
        }
    }
    return highestScenicScore;
}

console.log("Javascript")
const part = process.env.part || "part2"

if (part === "part1")
    console.log(getSolutionPart1())
else
    console.log(getSolutionPart2())