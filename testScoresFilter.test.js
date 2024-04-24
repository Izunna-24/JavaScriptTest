let {testScores, addFiveToScores, squareOfScores} = require("./testScoresFilter.js")


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

        test("squaring scores", () =>{
            let scores = [2, 4, 6, 8, 10];
            let result = squareOfScores(scores);
            expect(result).toEqual([4, 16, 36, 64,100])
            
            })

        test("Assign books to users", () =>{
            let members = ["Emily","Jack", "Sophia","Daniel"];
            let result = squareOfScores(members);
            expect(result).toEqual(["Emily"])
                
             })