let globalVar = "Global";

function testScope() {
    let functionVar = "Function";

    if (true) {
        let blockVar = "Block";
        console.log(globalVar);  
        console.log(functionVar);
        console.log(blockVar);    
    }

    // console.log(blockVar); 
}

testScope();

// console.log(functionVar); 
// console.log(blockVar);    
console.log(globalVar);     
