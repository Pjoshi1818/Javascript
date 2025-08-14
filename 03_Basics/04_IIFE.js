// Immediately Invoked Function Exprication   (IIFE)    

(function chai(){    // named IIFE
    console.log(`ram kumar sir `);
    })();

    // jo function Immediately exicuate ho jay 
    // globle scope ka pouction sa problem ho ti ha us sa bach na ka leya ya hata na ka leya IIfe ka use kar ta ha 

((name ) => {
    console.log(`ok thain ${name} `);
    })("raja ji ")