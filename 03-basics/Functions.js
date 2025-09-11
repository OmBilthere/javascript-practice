// function ka kaam vaisa hi h jaisa other language m h c++ java etc
// eg
function sayMyName() {
    // console.log("O")
    // console.log("M")
}
// sayMyName  // ye hota h function reference
sayMyName() // ye hote h function call

function addtwoNums (num1 , num2) {
  //  console.log(num1+num2)
}
// addtwoNums(3,4) calling
// what if arg doosre format ke pass kr dein
addtwoNums(3,"4") // phle hi padh chuke h string m convert hoke 34 de dega

// standard ke hisab se function call m input ko args bolte h aur function ki defination 
// m use parameter bolte h lekin koi jroori nhi h

// question -
// ab maan lo hum is addtwoNums function ko kisi variable m store kre aur use print kre to kya op aayga

let result = addtwoNums(3,4)  
// since there is no return type in function so it will give op as undefined

function sum (num1 , num2) {
    return (num1+num2)
}

result= sum(3,4)
//console.log(" Result : ", result)

// ese hi ek case hoga jab return to ho rhi value par kahi print hi nhi ki to bhi wo show nhi hogi
// mtlb sab sahi hoga but kuch print nhi hoga agar kahi accept hi nhi ki to
// function login(username) {
//     if(username===undefined)    { // or if(!username) 
//       console.log("Invalid name")
//       return
//      }
//     return `${username} just logged in`
// }
// console.log(login("om"))
//  agar hum kuch pass nhi karenge upar wale function m to undefined aayga
//  isliye hum if condition lgake check kr skte h

// ab maanlo hum chahte h ki if condition na lgani pade to kuch esa bhi kr skte h
function logedin(username ="om") {

    return `${username} just logged in`
}
// console.log(logedin()) //ab default value om hi rahegi kuch likh doge to wo overwrite kr dega 
 

// part - 2


// ab upar to function m hume pta h ki kitne args pass ho rhe h kya ho 
// agar hume pta hi na ho ki agrs kitne aayenga eg - ecommerce shopping website m cart m kitne bhi item aa skte h
// basic eg - neeche hum rest operator (spread ko hi yaha rest bol dete h)  
function calculateCartPrice (...num1) {
  return num1
}
// console.log(calculateCartPrice(200,400,500)) //ye sabhi ko ek array m daal dega baad m jab loop seekhenge to add krna seekh lenge


function calculateCartPrice (val1 ,val2 ,...num1) {
  return num1
}
// console.log(calculateCartPrice(200,400,500,3000))
// upar ka op m only 500, 3000 array m aayenge kyo val1 val2 m aage ki 2 value ja chuki h


// object handling through func's

const user = {
    username : "om",
    price : 199
}
function handleObj (anyobject) {
    // console.log(`username is ${anyobject.username} and price ${anyobject.price}`);
    
}
// handleObj(user)

// jaroori nhi h ki upar jaise hi pass kre function call m poora object bhi pass kr skte h
handleObj( {
    username:" Maharaj Om" , 
    price : 200
})

// ab array ko aur pass krte h 
const myArr = [200 , 500 , 333]

function returnSecondValue (getArr) {
    return getArr[1]
}

console.log(returnSecondValue(myArr))

// ab direct daalenge
 console.log(returnSecondValue([400 , 1000 , 4000 ]))


 