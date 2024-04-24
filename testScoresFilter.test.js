let {testScores, addFiveToScores} = require("./testScoresFilter.js")


test("filter scores greater than 70", () =>{
    let scores = [90, 100, 56, 70, 35, 90];
    let result = testScores(scores);
    expect(result).toEqual([90, 100, 70, 90])
    
    })
    
    test("adding five to scores", () =>{
        let scores = [90, 90, 56];
        let result = addFiveToScores(scores);
        expect(result).toEqual([95, 95, 61])
        
        })