let array=[1,2,3,4,5];

//map function used to transforms the elements in an array to something else.here it is null

let new_arr=array.map((element)=>{
    console.log(element)
    return null
})
console.log(new_arr)

//simplefied version

let n=array.map((e)=>{return "hi"})
console.log(n)

//excersice
let aud=array.map((usd)=>{return usd*1.5})
console.log("Aud:"+aud)