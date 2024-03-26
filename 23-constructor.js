//JavaScript Constructor

class MyClass {
    // constructor() {
    //     console.log("Hello Constructor");
    // }
    //----=======JavaScript Constructor Parameter 

    constructor(a,b){
       // console.log(a+b);
       this.firstNumber = a;
       this.secondNumber = b;
    }

    add(){
        let result = this.firstNumber+this.secondNumber;
        console.log(result);
    }

}

var obj = new MyClass(70,30);
obj.add();