function solution(year) {
    return Math.ceil(year / 100);
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test centuryFromYear

// alternative solution
// const solution = y => Math.ceil(y / 100);
