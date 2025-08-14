// Immediately Invoked Function Expression (IIFE)  

(function chai() {    // Named IIFE
    console.log(`ram kumar sir`);
})();

// A function that executes immediately  
// Used to avoid problems caused by global scope pollution

((name) => {    // Arrow function IIFE
    console.log(`ok thain ${name}`);
})("raja ji");
