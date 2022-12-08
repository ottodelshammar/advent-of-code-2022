import fs from 'fs'

const inputDataLinesIntegers = (filename = 'input.txt') => {
    return fs.readFileSync(filename).toString().split('\n');
}

function Directory(name, size) {
    this.size = size;
    this.name = name;
}

const readInput = () => {
    const input = inputDataLinesIntegers();
    const allDriectories = [];
    const currentDirectoryStack = [];
    input.forEach(command => {
        const cmd = command.slice(0, 4)
        switch (cmd) {
            case '$ cd':
                if (command.slice(5) == '..') {
                    currentDirectoryStack.pop();
                } else {
                    const newDir = new Directory(command.slice(5), 0);
                    currentDirectoryStack.push(newDir);
                    allDriectories.push(newDir);
                }
                break;
            case 'dir ':
                break;
            case '$ ls':
                break;
            default:
                currentDirectoryStack.forEach(e => e.size += parseInt(command));
        }
    });
    return allDriectories;
}


const getSolutionPart1 = () => {
    return readInput(input).filter(dir => dir.size < 100000).reduce((a, b) => a + b.size, 0);
}

const getSolutionPart2 = () => {
    const directories = readInput().sort((a, b) => b.size - a.size)
    return directories.filter(e => e.size > (30000000 - (70000000 - directories[0].size))).pop().size
}

console.log("Javascript")
const part = process.env.part || "part2"

if (part === "part1")
    console.log(getSolutionPart1())
else
    console.log(getSolutionPart2())