// Class Inheritance 

class parent {

    hello01() {
        console.log("Hello 1 Function");
    }

    hello02() {
        console.log("Hello 2 Function");
    }
}

class child extends parent {

    hello01() {
        console.log("Hello 1 Function Hello 1 Function Hello 1 Function");
    }
}

//var obj = new parent();
var obj = new child();
obj.hello01();
obj.hello02();