const score = 400 
//console.log(score) // 400

const balance = new Number(50) // ye type ke saaath op deta h jaise ki iska op- Number : 50 hoga 
//console.log(balance.toString().length)  // string m convert krke length de deta h

//console.log(balance.toFixed(1)) // many times we need the values after decimal places so this function give values upto we write in the code



const otherNumber = 123.8966 

//console.log(otherNumber.toPrecision(3)) // ye function precise value deta h jaise ki iska op 124 hoga

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN')) // upar likhe number m 0 count krna muskil hota h to ye function , lga deta h digits ke baad
// agar bracket ke andar kuch nhi likhenge to US standard ke hisab se dega

// agar js ke andar check krna h ki min value aur max value kya ho skti h data type ki
//Number.MAX_VALUE ese hi min value hoti h





/////////////////////////// MATHS  //////////////////////////////

// console.log(Math.abs(-4))  // positive m badalta h op - 4
// console.log(Math.round(3.14)) // paas wali value m convert kr deta h op-3
// console.log(Math.ceil(4.2)) // ceil yaani upar wali value ese hi floor
// console.log(Math.max(4,3,5,37,69)) // max value deta h array m
// console.log(Math.random()) // 0 se 1 ke beech m value deta h

console.log((Math.random()*10 )+ 1) // w/o +1 esa bhi ho skta tha ki 0.04 something kuch aajay to value 0 bhi ho skti h 
// isiliye hum +1 kr dete h taaki range 1 se start ho
// floor(Math.random()*10 )+ 1
// floor se ye hoga ki digit exact milenge 1 se 10 tk

// maan lo kinhi 2 digit ke beech range chahiye h to

const min = 10
const max = 20
 // maanlo hume range chaiye h min aur max tk so derive the result

// step-1 yaha pe math random se 0 se 10 ke beech m value aaygi to ab math random 0 se 0.9 dega aur
// usme max min ka differnce de denga to us range ke beech ki values aaygi
// eg -  0.5 * (20-10 +1 )
//  +1 isiliye kiya kyoki math random 0.9999 max hoga to difference se multipy hota agar wo
// 20-10 = 10 se krte bhi multiply to 9.99 hota max lekin hume to 10 bhi include krna h 
// isliye +1 kr diya aur ceil le liye to ab 10 bhi possible h 

//( Math.floor (Math.random())* (max-min+1) )

// step-2 humne upar dekh liya ki humari value range m to aa gyi jaise eg m 0 se 10 possible h
// lekin hume to chahiye min se equal ya upar yaani usme min aur add krdo
 console.log( Math.floor( Math.random() * ( max- min + 1) ) + min )
 // ab ise formula maano jo maanna h maano bas banna chahiye