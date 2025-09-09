let score = "33"
//console.log(typeof(score))
// or
//console.log(typeof score)

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)

// ab hum score m kuch string aur add krte h
score = "33abc"
valueInNumber = Number(score)
// type number hi dega 
// console.log(typeof(valueInNumber))
// number print krenge to NaN dega
// console.log(valueInNumber)

// move forword
let a = null
// console.log(typeof a)

valueInNumber = Number(a)
// 0 de dega
// console.log(valueInNumber)

a = undefined
// console.log(typeof a)

valueInNumber = Number(a)
// Nan de dega
// console.log(valueInNumber)

// a = true aur false krke number m krenge to 0 / 1 aayga
// maan lo pure string dede aur convert kre to NaN dega

let isLoggedIn = 1
let booleanIslogin = Boolean(isLoggedIn)
// true dega
// console.log(booleanIslogin)
// isi type se 0 ko krenge to false ayga

// maanlo ab string ko boolean m badle
let check = ""
booleanIslogin = Boolean(check)
// false dega
// console.log(booleanIslogin)

check = "om"
booleanIslogin =Boolean(check)
// console.log(booleanIslogin)

// ab number se string m badle
let somenumber = 10
let stringnum = String(somenumber)
// console.log(typeof(stringnum)) //string dega
// console.log(stringnum)  // string print kr dega (10)

//  Operations

let value = 3 
let neg = -value //-3 store krega

// console.log(2+2) 4 dega ese hi - , * , / , % ye honge

let str1 ="hello"
let str2 ="om"
// let st3 = str1+str2  ye hello om de dega space ke saath

// console.log("1"+2)   //12 de dega
// console.log(1 +"2") // 12
// console.log ("1"+2+2) // ye dega 122 
// lekin order bdlenge to
// console.log(1+2+"2") // ab ye 32 dega phle add kr dega


// bool related
// console.log(true) // ye dega true
// console.log(+true) // ye 1 dega 
//console.log(true+) // ye  error dega   

let num1 , num2 , num3 
num1 = num2 = num3 = 2+2  // 4 store kr lega

// incremental 

// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);
// // Expected output: "x:4, y:3"

// let a = 3;
// const b = ++a;

// console.log(`a:${a}, b:${b}`);
// // Expected output: "a:4, b:4"


