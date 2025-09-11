//  singleton-->ye constructor se bnta h itna dhyan rkhna h filhal ke liye ye bnta h Object.create method use krke
// next file m yaani 03-Objects/Object2.js m h ye




// yaha hum object literals ki baat krenge 

const mySym = Symbol("key1")

const jsUser = {
    name: "Om bilthere" ,
    age: 22 ,
    location : "Jabalpur",
    email: "ombilthere953@gmail.com" ,
    isloggedin: false,
    lastLoginDays : ["Monday" , "Friday"],
    "college name" : "SRIT",
   [mySym]: "mykey1"  // symbol ko [] iske andar hi likhte h nhi to js use normal string jaise hi treat krne lgti h



} 
// ese krte h define object ko 
// iske saath hi jo key h jaise name email etc ye peeche js m string ke jaise treat hoti h


// access krne ke tarike
// console.log(jsUser.email) // ye tarika thik hi h utna khaas nhi h
// ab upar wale tarike se clg name wali field access nhi kr stke uske liye neeche wali
// method hi chaiye hogi
// console.log(jsUser["email"])
// console.log(jsUser["college name"])
// console.log(jsUser[mySym])  // symbol ko bhi ese hi access krte h no other option

// change krna ho koi mtlb overwrite
jsUser.name= "Om Maharaj"
// console.log(jsUser["name"])
// value ko lock kr skte h taaki koi change na ho 
// Object.freeze(jsUser)
// ab jsUser freez ho chuka h abhi to commented h to neeche jo likha h uska frk nhi padega
// agar not commented h to bdl jayga
jsUser.email="bilthere_om_393@gmail.com"
// console.log(jsUser)



jsUser.greeting = function () {
    console.log("Hello Om")
}
jsUser.greeting2 = function () {
    console.log(`Hello ${this.name}`) // this ki jgh jsUser bhi likh skte the lekin this usi object ko refrence kr deta h
}

console.log(jsUser.greeting()) // maanlo greeting ke baad () ye na lgate to reference bas pta chlta us function ka
// in function m return nhi ho rha kuch to undefined bhi add hoga console m
console.log(jsUser.greeting2())
