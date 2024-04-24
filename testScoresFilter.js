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

function timesTable(time){
    return  time.filter((params)=> params.endsWith("PM"));
    
}



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

    function expenseTracker(david){
    david= {
        groceries:150,
        diningout:100,
        transportation:50,
        entertainment:80
        }
        for (const key in david){
            
            }
    }
    



module.exports = {testScores, addFiveToScores, squareOfScores,bookAssigner,timesTable};