const user = {
    username : "om" ,
    price : 99 ,
    WelcomeMsg : function () {
        // console.log(`WELCOME ${this.username}`)  // current context ko btane ke liye this use kiya h taaki wo current ka
        //element hi select kre
        console.log(this)  // ye username price jaise keys ko print krega kyoki current context m wo hi h
    }
    
}

 user.WelcomeMsg() // current context ko print kar dega
// user.username = "maharaj om" // yaha context badal diya
// user.WelcomeMsg() // ab upar wala current context m aa gya

// agar yaha currentcontext dekhe to 

console.log(this) // yaha pe empty {} - ye dega

// browser m upar wala run kroge to window object dega kyoki wo hi browser m global object hota h
// tabhi to usme diffent window ke object capture kr paate h jaise click formsubmit etc

// function chai () {
//     let username = "om"
//     //console.log(this) // ab isme yaha pe bhut saari cheeje aayengi
//     console.log(this.username)// ye undefined dega nhi kr paayenge access this se abhi tk ye jana ki object m this se kr skte h func m nhi

// }

//  chai()


// arrow function --

const chai = () => {
    let username= "om"
    console.log(this) // yaha output {} dega
}

chai()

// syntex


// const addTwo = (num1 ,num2) => {  
//     return num1+num2
// }
// console.log(addTwo(3,4))


// ek line ke statement m direct
// const addTwo = (num1 , num2) => num1 + num2 
// console.log(addTwo(3,4))
// esa bhi likh skte h
// kulmila ke curly bracket m return likhna hi padega 
// aur parathensis m nhi likhna aur paranthesis bhi optional h upar humne nhi lagay h
// lekin ek baat imp ye h ki jaise hume object return krna h to phir to curly bracket aaynge object ke to phir 
// paranthesis m wrap krna jroori hota h for just eg lets assume

const addTwo = (num1 , num2) => ({username : "om"})
console.log(addTwo(2,3)) // ab console ke object print ho jayga



