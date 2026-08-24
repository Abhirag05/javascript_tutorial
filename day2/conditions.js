let hasMembership=false
let signedIn=false

if (hasMembership){
    console.log("Yes u have an premium membership")
}
else if(signedIn){
    console.log("Upgrade to premium")
}
else{
    console.log("Sign in failed")
}

let age=16
let diff;
if (age>=18){
    console.log("You are " + age +" years old")//simple way for printing dynamic values
}
else{
    diff=18-age
    console.log(`Your age difference:${diff}`)//recommended way for printing dynamic values
}