// Array

let myArr = [0 , 1 ,2, 3, 4 ,5 ,6] // mix ho skte h array item mtlb string bhi aa skta h int ke saath boolean bhi

// console.log(myArr[0]) // access of array

const myHeros = ["shaktiman" , "nagraj"]

// const myArr2 = new Array(1,2,3,4,5,6) other type of declaring the array

// Array method

myArr.push(7) // 7 add 
// console.log(myArr) // print arr
myArr.pop() // pop last element

// ek operation h unshift.. ye array ke first position pe element add kr deta h eg
myArr.unshift(-1)
// console.log(myArr) 
// isi type se shift bhi hota h jo first value ko uda deta h 
myArr.shift()
// console.log(myArr) 

// console.log(myArr.includes(1)) // true false dega according to existance
// console.log(myArr.indexOf(4))   // index dega hoga to o/w -1 dega

const newArr= myArr.join()
// console.log(myArr);  // ye to hume pta hi h ki array h
// console.log(newArr); // lekin iska jab typeof dekhenge to string array aata h yaani newArr ek string bn chuka h

// slice 

console.log("A",myArr)  // A [0,1....] ese type ka op dega
const myn1= myArr.slice(1,3) // ye first value (here- 1) starting index and second value (here- 3) is 
// the index- 1 we access the element means 3 likha h to 2 tk ke element excluding 3
// so overall last entry nhi hatti h [1,3)

console.log(myn1) 

console.log("B", myArr)


//      splice


const myn2= myArr.splice(1,3) // ye original array m bhi reflect hoga yaani myArr se bhi gayab ho jayga wo portion jo pass kiya h humne
// isme 1 se 3 index tk jo hoga wo hat jayga here [1,3] 
console.log("C", myArr);
console.log(myn2)

  