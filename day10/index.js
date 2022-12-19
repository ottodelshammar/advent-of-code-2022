import fs from 'fs'

const inputDataLinesIntegers = (filename = 'input.txt') => {
    return fs.readFileSync(filename).toString().split('\n')
}

const instructions = inputDataLinesIntegers();
const CRT = [[], [], [], [], [], []]
var register = 1;
var innerCycle = 0;
var value = 0;
var row = 0;

const draw = (cycle) => {
    if (cycle >= register && cycle <= register + 2
    ) {
        CRT[row].push('#')
    } else {
        CRT[row].push('.')
    }
    if (cycle % 40 == 0) {
        register += 40;
        row++;
    }
}

const beginExecution = (instruction) => {
    if (instruction == 'noop') {
        innerCycle = 1;
        value = 0;
    } else {
        innerCycle = 2;
        value = parseInt(instruction.split(' ')[1])
    }
}

const getSolutionPart1 = () => {
    const registerValues = [];
    for (let cycle = 1; cycle <= 220; cycle++) {
        if (innerCycle == 0) {
            register += value;
            beginExecution(instructions.shift())
        }
        registerValues.push(register);
        innerCycle -= 1;
    }
    return registerValues[19] * 20 + registerValues[59] * 60 + registerValues[99] * 100 + registerValues[139] * 140 + registerValues[179] * 180 + registerValues[219] * 220;
}

const getSolutionPart2 = () => {
    for (let cycle = 1; cycle <= 240; cycle++) {
        if (innerCycle == 0) {
            register += value;
            beginExecution(instructions.shift())
        }
        draw(cycle);
        innerCycle -= 1;
    }
    return [CRT[0].join(''), CRT[1].join(''), CRT[2].join(''), CRT[3].join(''), CRT[4].join(''), CRT[5].join('')];
}

console.log('Javascript')
const part = process.env.part || 'part2'

if (part === 'part1')
    console.log(getSolutionPart1())
else
    console.log(getSolutionPart2())