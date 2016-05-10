// Module Pattern
//
// Use an immediately invoked function expression to hide
// private variables and methods in a closure, and return an
// object with public properties and methods

var myNamespace = (function () {
    var myPrivateVar, myPrivateMethod;

    // A private counter variable
    myPrivateVar = 0;

    myPrivateMethod = function (foo) {
        console.log(foo);
    };

    return {
        
        // A public variable
        myPublicVar: "foo",

        // A public function utilizing privates
        myPublicFunction: function (bar) {
            
            // Increment private counter
            myPrivateBar += 1;

            // call our private method with bar
            privateMethod(bar);
        }
    };
}());
