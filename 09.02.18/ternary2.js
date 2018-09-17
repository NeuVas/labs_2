const a = null;

const b = (a !== a) ? '=NaN' 
        : (a === "") ? '=""' 
        : (a === undefined) ? '=undefined'
        : (a === null) ? '=null' 
        : (a === 0) ? '=0'
        : (a === false) ? '=false' : "other";

console.log(`a${b}`);