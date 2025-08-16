// Execution Context + Call Stack Demo (IIFE)

// IIFE to avoid global pollution
(function () {
    function one() {
        console.log("Function One");
        two(); // calling function two
    }

    function two() {
        console.log("Function Two");
        three(); // calling function three
    }

    function three() {
        console.log("Function Three");
    }

    // execution starts here
    one();  
})();
