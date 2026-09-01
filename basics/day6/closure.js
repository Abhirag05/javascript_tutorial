//a cloure is a function remembering variables from its sorrounding scope even after the outer function has finished executing

function outer() {
    let count = 0;
    return function hi(){
        count++;
        return count;
    }
}
const closure_example = outer();
console.log(closure_example()); 
console.log(closure_example());
