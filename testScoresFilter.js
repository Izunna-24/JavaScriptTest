//let answer = array.filter(num => num % 2 == 0)
//let answer = array.map((num)=> num % 2 == 1)

function testScores(score){
let pass = score.filter(param => param >= 70);
return pass;
}

function addFiveToScores(scores){
    let newScore = scores.map((params)=> params + 5);
    return newScore;
}

module.exports = {testScores, addFiveToScores};