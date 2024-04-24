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

function squareOfScores(scores){
    let newScore = scores.map((params)=> params*params);
    return newScore;
}

// function timesTable(time){
//     return time.filter(params);
//     return newTime;
// }



    function bookAssigner(members, books) {
        updatedRecord = []
       for(let index = 0; index < books.length; index++) {
            let givenBooks = {}
          givenBooks.name = members[index];
          givenBooks.book = books[index]
          updatedRecord.push(givenBooks)
        }
        return updatedRecord;
      }

      
    



module.exports = {testScores, addFiveToScores, squareOfScores,bookAssigner};