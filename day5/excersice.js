/*function signUp(
    email,
    password,
    name,
    discord,
    subscription,
    lessonCompleted
){
    let users=[]
    let user={
        email:email,
        password:password,
        name:name,
        discord:discord,
        subscription:subscription,
        lessonCompleted:lessonCompleted,
    }
    users.push(user)
    console.log("object added:"+users)
    for(let i=0;i<users.length;i++){
        console.log(users[i])
    }
}

signUp('none123@gmail.com','none123','none','noneyt','premium',[1,2,3])
signUp('none123@gmail.com','none123','none','noneyt','premium',[1,2,3]) */


//best practice
let users=[]
function signUp(user){
    users.push(user)
}

signUp({
    email:'none123@gmail.com',
    password:'none123',
    name:'none',
    discord:'noneyt',
    subscription:'premium',
    lessonCompleted:[1,2,3]
})
console.log(users);
