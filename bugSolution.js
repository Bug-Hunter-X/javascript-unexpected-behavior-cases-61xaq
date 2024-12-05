function myFunc() {
  console.log(this);
}

// Solution: Use bind to explicitly set the value of 'this'
const boundMyFunc = myFunc.bind({ name: 'Example' });
boundMyFunc(); // Logs { name: 'Example' }

//In strict mode
'use strict';
function myFuncStrict(){
    console.log(this);
}
myFuncStrict(); //Logs undefined