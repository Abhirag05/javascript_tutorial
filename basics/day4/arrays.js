let groceries=["milk","eggs","bread"]

console.log(groceries)
console.log(groceries[0])//first element
console.log(groceries[groceries.length-1])//last element

for(let i=0;i<groceries.length;i++){
    console.log(groceries[i])
}

//to add values

groceries.push("new item")

console.log(groceries)

//to remove values

groceries.pop()

console.log(groceries)

array=[1,2,3,4,5]

//filter() method:filter out the items from the array based on some conditions,ie the items which satisfies the conditions will remain and others will be removed.this wont create an new array instead an copy ,so the original array remains same.

filtered_array=array.filter((element)=>{
    console.log(element)
    if(element>2){
        return true;
    }
});
console.log(filtered_array);

//simplified version
f_arr=array.filter(element=> element>2);
console.log(f_arr);




