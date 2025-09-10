// Dates
let myDate = new Date()
console.log(myDate) // format deta h current date ka jo ki readable sa nhi dikhta 
// isiko string m badal denge to day bhi dikhayga mtlb ki charactor aayenge
// console.log(myDate.toString())
// console.log(myDate.toDateString()) // mujhe to ye sahi lga 
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())

// console.log(typeof myDate)  // object

let myCreatedDate = new Date (2025, 8 , 10) // month 0 se start honge array ki indexing jaise 
// console.log(myCreatedDate.toDateString())
// method decide krti h ki kya show krna h jaise upar wali ke liye 3 hi format chaiye 

let myCreatedDate2 = new Date( 2025 , 8 , 10 ,9 , 30)
// isse thoda detail badh jaati h time bhi bta deta h
// console.log(myCreatedDate2.toLocaleDateString())

let myCreatedDate3 = new Date("09-10-2025")   
// console.log(myCreatedDate3.toLocaleDateString())

// time stamp esi jgh kaam aata h jaha pe stopwatch jaise kaam ho like quiz
let myTimeStamp = Date.now() // milisecond m output deta h

// console.log(myTimeStamp) // (milisecond) ye maanlo abhi ka date time
// console.log(myCreatedDate3.getTime()) // ye jaha se stopwatch start hua 
// now compare both and find exact time difference

// maanlo milisecond ko second m badlna h to
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getDay()) // aaj ka day dega ese hi month year date deta h

console.log(newDate.getMonth()+1) // 0 se hote h start month to 1 badhana padega

