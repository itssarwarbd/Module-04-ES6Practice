// Class Super Keyword

class parent {

    hello01() {
        console.log("Hello 1 Function");
    }

    hello02() {
        console.log("Hello 2 Function");
    }
}

class child extends parent {

    demo() {
        super.hello01();
        super.hello02();
    }
}

//var obj = new parent();
var obj = new child();
obj.demo();
