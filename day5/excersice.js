function signUp(
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
signUp('none123@gmail.com','none123','none','noneyt','premium',[1,2,3])
