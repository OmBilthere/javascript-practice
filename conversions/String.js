// const name =  "Om"
// const repocount = 3

// This is one of the way to print
//console.log(name + repocount)
// not looking good so we can use 
//console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

// one more syntex for declaration 
const gameName = new String ('FreeFire')
// This is stored as key value pair if we want to access a charactor 
// in the string we can 
// console.log(gameName[0]);
// some other function or methods ---
// console.log(gameName.charAt(1));  r dega
// console.log(gameName.indexOf('r')) 2 dega

 const newString = gameName.substring(0,4) // isme first field m -ve value doge to 0 se hi manega
 console.log(newString)



 const anotherString = gameName.slice(-8, 2) // isme -ve bhi chlta h peeche se dekhta h 
 console.log(anotherString)
 
 // ye faaltu ki space neeche h unhe htana--- 
 const newStringone = "  om   "
 console.log(newStringone.trim())

 // Replace krne ke liye 
 const url = "https://ombilthere.com/om%20bilthere"
console.log( url.replace('%20', '-' ))

// agar kuch find krna h to
console.log(url.includes("om")) // true ya false deta h

// split se array bn jata h split hoke
const s = om-bilthere-srit-jabalpur
console.log(s.split('-'))
