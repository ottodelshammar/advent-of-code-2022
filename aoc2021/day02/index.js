import fs from 'fs'

export const inputDataLinesIntegers = (filename = "input.txt") => {
    return fs.readFileSync(filename).toString().trim().split("\n");
};

export const getSolutionPart1 = () => {
    var up = 0, down = 0, forward = 0;
    const vals = inputDataLinesIntegers().map(e => e.split(" "));
    vals.map(e => {
        if (e[0].charAt(0) == "u") {
            up += parseInt(e[1]);
        } else if (e[0].charAt(0) == "d") {
            down += parseInt(e[1]);
        } else {
            forward += parseInt(e[1]);
        }
    });
    return (down-up)*forward;
};

export const getSolutionPart2 = () => {
    var aim = 0, depth = 0, forward = 0;
    const vals = inputDataLinesIntegers().map(e => e.split(" "));
    vals.map(e => {
        if (e[0].charAt(0) == "u") {
            aim -= parseInt(e[1]);
        } else if (e[0].charAt(0) == "d") {
            aim += parseInt(e[1]);
        } else {
            forward += parseInt(e[1]);
            depth += parseInt(e[1])*aim;
        }
    });
    return depth*forward;
};

console.log(getSolutionPart2())
