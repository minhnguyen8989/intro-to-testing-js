// helloWorld function 
var helloWorld = function() {
    return "Hello, World!";
}

function sayHello(input) {
    if (input === undefined){
        return "Hello, World!";
    } else if(input === true || input === false) {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}
