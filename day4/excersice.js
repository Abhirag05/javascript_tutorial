people=[18,20,16,15,21]

//using filter
allowed=people.filter((e) => e >= 18);
console.log(allowed);

//using for loop
for(let i=0;i<people.length;i++){
    if (people[i]>=18){
        console.log(`Your age is:${people[i]},so you r allowed`);
    }
}