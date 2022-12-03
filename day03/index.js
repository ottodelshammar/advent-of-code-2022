import fs from 'fs'

const inputDataLinesIntegers = (filename = "input.txt") => {
    return fs.readFileSync(filename).toString().trim().split("\n");
}

const countScore = (letters) => {
    var score = 0;
    const priorities = ['0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for(let i = 0; i < letters.length; i++){
        for(let j = 0; j < priorities.length; j++){
            if(letters[i] == priorities[j]){
                score+=j;
            }
        }
    }
    return score;
}

const compareLetters = (str1, str2) => {
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1.charAt(i) == str2.charAt(j)) {
                return str1.charAt(i);
            }
        }
    }
}

const compareLetters2 = (str1, str2, str3) => {
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1.charAt(i) == str2.charAt(j)) {
                for(let k = 0; k< str3.length; k++){
                    if(str3.charAt(k) == str2.charAt(j)){
                        return str1.charAt(i);
                    }
                }
            }
        }
    }
}

const getSolutionPart1 = () => {
    const bags = inputDataLinesIntegers().map(e => { return [e.slice(e.length / 2), e.slice(0, e.length / 2)] });
    const letters = [];
    bags.forEach(bag => {
        letters.push(compareLetters(bag[0], bag[1]));
    })
    return countScore(letters);
}

const getSolutionPart2 = () => {
    const bags = inputDataLinesIntegers()
    const letters = [];
    for(let i = 0; i < bags.length; i+=3){
        letters.push(compareLetters2(bags[i], bags[i+1], bags[i+2]))
    }
    return countScore(letters);
}

console.log("Javascript")
const part = process.env.part || "part1"

if (part === "part1")
    console.log(getSolutionPart1())
else
    console.log(getSolutionPart2())