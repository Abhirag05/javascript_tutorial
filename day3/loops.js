//for loop ,while loop , do while loop are common loops in js

//for loops
for (let i=0; i<=5; i++){
    console.log("for loops:"+i)
}
console.log("for loop finished")

//while loops
let i=0
while (i<=5){
    console.log("while loop:"+i)
    i+=1
}
console.log("while loop finished")

//excersice 1
for(let i=1; i<=15; i++){
    if (i%2==0){
        console.log(i+"is even");
    }else if(i%5==0){
        console.log(i+"is divisible by 5");
    }else{
        console.log(i+"is odd");
    }
}

