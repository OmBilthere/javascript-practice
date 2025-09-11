// yaha jo loops h wo jyada array specific h

// for of


// eg ---

// const arr = [1,2,3,4,5] 
// for (const val of arr) {
//     console.log(val);
    
// }
// const greeting = "Hello World" 
// for (const element of greeting) {
//     console.log(element);
    
// }

// Maps (unique values) by for of

const map = new Map ()
map.set('IN', "India")
map.set('USA',"United State of America")
map.set('Fr', "France")

// for(const key of map) {
//     console.log(key) // har ek pair ki value aa jaygi ek ek krke
// }  

// maanlo ek hi saath sab chahiye 
// for(const [key , value] of map) {
//     console.log(key , '-' , value) // sab ek saath aa jaate h
// }

// for of on object 



// const myObj = {
//     game1 : 'Free Fire' , 
//     game2 : "Bgmi",
//     game3 : "COD"
// }
// it is wrong 

// for (const [key , value] of myObj) {
//    console.log(key , '-' , value) // Error dega ye object for of se iteratable nhi hote h

// }

// to solution ke liye hum introduce krenge forin loop ko 


// aur forin object pe lg rha h to iska mtlb ye nhii h ki ye sirf 
// object pe hi lagega

// for (const key in myObj) {
//       console.log(key)  // keys de dega saari
//     }

// for (const key in myObj) {
//       console.log(`key is ${key} and value is ${myObj[key]}` )  // keys de dega saari
//     }

// ab ye to rhi object ki baat ab hum ise array pe lgayenge aur dekhenge kya result aayga 
// const arr2 = [ "js" , "cpp" , "py" , "java"]

// for (const key in arr2) {
//     // console.log(key) // ab ye yaha keys mtlb index print krega na ki values
//     console.log(arr2[key]) // ye dega values of array
// }
// is for in loop ko map pe nhi lagaya ja skta kyoki map m iteratable nhi hota
 
// for each

// isme callback func hote h mtlb func ka naam nhi hota direct args hote h
// arr2.forEach( function (item) {
//   console.log(item) //array ke element de dega

// })
//chahe to arrow func bhi use kr skte h lekin naam isme bhi nhi hoga

// arr2.forEach( item =>{
//    console.log(item)
// })


// isi upar wale ko alg alg likhlo smjhne ke liye

// function print(item) {
//     console.log(item)
// }
// arr2.forEach(print) // yaha sirf refrence dena h to refrence ka bhi use dekh liya ki kaha kaam aata h
// iska op sabhi array element honge

// parameter aur bhi hote h iske pass
// arr2.forEach ((items, index ,arr )=> {
//     console.log(items,index,arr)
// })
// ye value index aur poora array har baar kr dega print

// const mycoding = [
//     {
//     langName : "JS",
//     file : "jsfile"
//     },
    
//     {
//     langName : "CPP",
//     file : "cppfile"
//     },

//     {
//     langName : "Java",
//     file : "javafile"
//     },
// ]

// mycoding.forEach ( (item) => {

//   console.log(item.file)  // sab files ke naam de dega

// })



// storing values aur dekhte h kr skte h ki nhi

// const values = arr2.forEach((item)=>{
//     console.log(item) // yaha values to print ho jaygi

// })
// console.log(values) // yaha undefined dikhega kyoki foreach kabhi value return nhi krta
// aur jab value return nhi krega to store hi nhi hogi

// isi prblm ko solve krenge ab hum

const nums = [0,1,2,3,4,5,6,7,8,9,10]
// let newnums = nums.filter ((nums)=>nums>4)  // ab isse hum arrow ke baad condition lgake access kr skte h 
// jo hume chahiye wo values return ho jaati h
// console.log(newnums); // 5 se leke 10 tk mil jayengi
// isi ko likhne ka ek aur tarika
// let newnums = nums.filter ((nums)=> {
   
//     return nums>4

//    }  )

// ab maanlo ki hume filter nhi lgana aur for each hi use krna h to phir

// const newArr =[]
// nums.forEach((val)=>{
//     if(val>4)
//     newArr.push(val)
// })
// console.log(newArr) // same result 5 se 10 tk

// map ka use 
// const newnums=nums.map((num)=>num+10)
// console.log(newnums) // sabme 10 add hoke mil jayga


// chaining

// const vals = nums.map((num)=>num*10).map((num)=>num+1).filter((num) => num>30)
// console.log(vals) // phle 10 se multiply hoga poora array milega phir poore array m ek plus hoga aur 30 se badi value de dega



// Reduce eg- cart m rkhe product ka total sum

// const total = nums.reduce(function (acc, curr){
//     console.log(`acc: ${acc} and current ${curr}`) // har index pe value
//     return acc+curr
// },0) // ye last m 0 initialization h usi se values start hoti h

// console.log(total) // final answer

// isi ko arrow function m likhenge

const total = nums.reduce((acc,curr)=>acc+curr,0)
console.log(total)
