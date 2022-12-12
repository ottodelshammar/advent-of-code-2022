import fs from 'fs'

const inputDataLinesIntegers = (filename = 'input.txt') => {
    return fs.readFileSync(filename).toString().split('\n').map(e => e.split(' '))
}

const moveOneStep = (direction, head) => {
    switch (direction) {
        case 'R':
            head[0] += 1;
            break;
        case 'L':
            head[0] -= 1;
            break;
        case 'U':
            head[1] += 1;
            break;
        case 'D':
            head[1] -= 1;
            break;
    }
}

const moveDiagonally = (head, tail) => {
    if (head[0] < tail[0] && head[1] < tail[1]) {
        moveOneStep('L', tail)
        moveOneStep('D', tail)
    }
    if (head[0] > tail[0] && head[1] < tail[1]) {
        moveOneStep('R', tail)
        moveOneStep('D', tail)
    }
    if (head[0] < tail[0] && head[1] > tail[1]) {
        moveOneStep('L', tail)
        moveOneStep('U', tail)
    }
    if (head[0] > tail[0] && head[1] > tail[1]) {
        moveOneStep('R', tail)
        moveOneStep('U', tail)
    }
}

const moveLinearly = (head, tail) => {
    if(head[0] > tail[0]){
        moveOneStep('R',tail);
    }
    if(head[0] < tail[0]){
        moveOneStep('L',tail);
    }
    if(head[1] > tail[1]){
        moveOneStep('U',tail);
    }
    if(head[1] < tail[1]){
        moveOneStep('D',tail);
    }
}


const isAdjacent = (head, tail) => {
    if (tail[1] >= (head[1] - 1) && tail[1] <= head[1] + 1) {
        if (((tail[0] + 1) == head[0]) || (tail[0] == head[0]) || ((tail[0] - 1) == head[0])) {
            return true;
        }
    }
    return false;
}

const isInLine = (head, tail) => {
    if (tail[1] == head[1] || tail[0] == head[0]) {
        return true;
    }
    return false;
}

const move = (motion, rope) => {
    var direction = motion[0];
    const steps = parseInt(motion[1]);
    for (let step = 0; step < steps; step++) {
        moveOneStep(direction, rope[0])
        for(let r = 0; r < rope.length-1; r++){
            if (!isAdjacent(rope[r], rope[r+1])) {
                if (isInLine(rope[r], rope[r+1])) {
                    moveLinearly(rope[r], rope[r+1])
                } else {
                    moveDiagonally(rope[r], rope[r+1])
                }
            }
        }
        tailPositions.push([...rope[rope.length-1]])
    }
}

const tailPositions = []
const motions = inputDataLinesIntegers();

const getSolutionPart1 = () => {
    var rope = [[0,0], [0,0]]
    motions.forEach(motion => {
        move(motion, rope)
    })
    return [...new Set(tailPositions.map(e => e.join()))].length;
}

const getSolutionPart2 = () => {
    var rope = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]];
    motions.forEach(motion => {
        move(motion, rope);
    })
    return [...new Set(tailPositions.map(e => e.join()))].length;
}

console.log('Javascript')
const part = process.env.part || 'part2'

if (part === 'part1')
    console.log(getSolutionPart1())
else
    console.log(getSolutionPart2())