function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    function namedFunction() {
        console.log("This is a named function.");
    }
    return namedFunction;}

    function returnsAnAnonymousFunction() {
        return function() {
            console.log("This is an anonymous function.");
        };
    }

receivesAFunction(() => console.log("Callback function executed."));
const namedFunc = returnsANamedFunction();
namedFunc(); 

const anonymousFunc = returnsAnAnonymousFunction();
anonymousFunc(); 