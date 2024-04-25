let {testScores, addFiveToScores, squareOfScores,bookAssigner,timesTable,expenseTracker} = require("./testScoresFilter.js")


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

            test("Assign Books",()=>{
                let members = ["Emily", "Jack", "Sophia", "Daniel"]
                let books = ["Koinonia", "Fast and Furious", "man made god", "Interim chef"]
                let updatedRecord = bookAssigner(members, books);
                expect(updatedRecord).toEqual([{name: "Emily", book: "Koinonia"}, 
                                        {name: "Jack", book: "Fast and Furious"}, 
                                        {name: "Sophia", book: "man made god"}, 
                                        {name: "Daniel", book: "Interim chef"}]);
              })
                
             

             test("Scheduling classes", () =>{
                let timings = ["9:00 AM","11:00 AM","1:00 PM","3:00 PM","5:00 PM"];
                let result = timesTable(timings);
                expect(result).toEqual(["1:00 PM","3:00 PM", "5:00 PM" ])
                    
                 })

                 test("track money spent", () =>{
                     david= {
                        "groceries":150,
                        "dining out":100,
                        "transportation":50,
                        "entertainment":80
                        }
                    let result = expenseTracker(david);
                    expect(result).toBe(380)
                        
                     })