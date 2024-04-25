let {Shape} = require("./CreatingClasses.js")
class Rectange extends Shape{
    constructor(name, side1, side2){
        super(name);
        this.side1 = side1;
        this.side2 = side2;
        
    }
    

    getArea(){
      let area = this.side1 * this.side2;
      return area;
    }

    isSquare(){
        if(this.side1 === this.side2){
            return true;
        }
        return false;
    }
}

let shape1 = new Rectange("name", 3, 3);
console.log(shape1.getArea(), shape1.isSquare());


