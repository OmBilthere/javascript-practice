// primitive data type (call by value jaise )
// 7 type : string number boolean null undefined symbol BigInt(ye bhut badi value ko convert krta h jaise scientific values)

 


// Non primitve (Refrence)
// Array , objects , functions ....inka typeof = function aata h

// declare array-----  
 const heros= ["Om", "Bilthere" , "Bhorda"]
// object declaration----
let obj = {
    name : "om", 
    age : 22,
}
// function declaration ------

const myFunc = function() {
    console.log("Hello Om")
}

 // Question - js static type langauage h ya dynamic 
 // ans - dynamic eg---
// let x = 10;   number
// x = "Om";     ab string
// x = true;     ab boolean


// memory 
// stack (primitive m use hota h)
// heap (non primitive m )

// stack based  (copies bnti h isme )

// let myname = ombilthere
// let  anothername = myname
//  anothername = "coderom"
// console.log(myname) ombilthere aayga
// console.log(anothername) coderom aayga


// Heap based (reference based)
// let user1= {
//     email: "user@google.com",
//     upi:"ombilthere953@ybl"
// }
// let user2=user1

// user2.email="ombilthere@gmail.com"
// console.log(user1.email) 
// console.log(user2.email)
// upar ke dono console ka output same aayga ombilthere953@gmail.com
// reason ye h ki dono ek hi location ko point kr rhe h aur koi bhi change hone
// par dono m reflect hoga


