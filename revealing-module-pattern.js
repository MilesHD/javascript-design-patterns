// Revealing Module Pattern
// 
// Define all function and variables in the private scope and
// return an anonymous object with pointers to private functionality
// we wish to be public
//
// The advantages of this pattern is it keeps the syntax cleaner and adds clarity to which
// functions and variables are public
//
// The disadvantages are that if a private function refers to a public function, the public function
// can't be overriden if a patch is necessary, so it may be more fragile if used improperly.

var myRevealingModule = (function () {
    
    var privateCounter = 0;

    function privateIncrement() {
        privateCounter += 1;
    }
    
    function publicIncrement() {
        privateIncrement();
    }

    return {
        increment: publicIncrement
    };

}());
