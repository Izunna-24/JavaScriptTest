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
        let amountSpent = 0;
    david= {
        "groceries":150,
        "dining out":100,
        "transportation":50,
        "entertainment":80
        }
        for (const key in david){
            amountSpent +=  david[key];
            }
    return amountSpent;
    }

    function mostOccured(numbers) {
            const counter = new Map();
            let maxCount = 0;
            let mostFrequent = [];
        
            numbers.forEach(num => {
                const count = (counter.get(num) || 0) + 1;
                counter.set(num, count);
                if (count > maxCount) [maxCount, mostFrequent] = [count, [num]];
                else if (count === maxCount) mostFrequent.push(num);
            });
        
            return mostFrequent;
        }
    
    

    

module.exports = {testScores, addFiveToScores, squareOfScores,
    bookAssigner,timesTable,expenseTracker,mostOccured};