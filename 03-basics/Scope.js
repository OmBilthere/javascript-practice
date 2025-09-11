// ye neeche wala if hamesa execute hoga 

  if (true ) {

   let a = 10 
   const b=20 
   var c = 30
 }
// console.log(a) // ye bol dega ki define nhi h jo ki acchi baat h kyoki scope m nhi h 
// console.log(b) // ye bhi bolega ki b not defined 
// console.log(c) // here comes the twist var ke karan c ki value aa jaygi bas isi reason se var ko avoid kiya jata h ab 
// aur yahi iski sabse badi prblm thi 
// isi type se - 

var p = 10
if(true ) {
    var p = 20
}
// console.log(p) // ab dena to ise chahiye p=10 kyoki global wahi h lekin 20 dega
// isliye var m prblm hoti h aur uska use nhi hota 


///// part - 2 /////

// nested scope

function one() {
    const username = "om" 
    function two () {
        const website = "youtube"
        console.log(username) // yaha acess mil jayga
    }

    console.log("fuction one")
    //console.log(website) // yaha not define scope prblm
}

// two()

// maanlo hum one ko call kre 
one() // yaha two aayga hi nhi kyoki use call nhi ki gyi to usko ignore krke badh jayga one aage

// interesting concept

addone(5) // ye to chal jayga no prblm
function addone  (num) {
    return num+1
}

// it is also another type to declare

// addTwo(5)  // yaha upar likhne se prblm hogi esa nhi kr skte

const addTwo = function(num) {
    return num+2
}
addTwo(5)  


