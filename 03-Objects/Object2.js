const tinderUser = new Object () // singleton object bas itna yaad rkho ki ye
// singleton object h baaki sab same hi hota h isme


// console.log(tinderUser) // empty dega {} esa


 tinderUser.id ="240704"
 tinderUser.name= "Om"
 
const regularUser = {
    email: "someemail@gmail.com",
    
    fullname : {

        userfullname: {

            firstname : " om ",
            lastname : "Bilthere"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);





const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3:"a", 
    4:"b"
}
//const obj3 = {obj1, obj2} // array jaisi prblm isme bhi hogi ek ke andar doosra poora ghus jayga merge nhi hoga
// const obj3 = Object.assign( {} , obj1 , obj2) // isme merge sahi hoga {} - ye dena optional h

// yaha bhi spread use krlenge ye prblm solve krne ke liye
const obj3 = {...obj1, ...obj2}

// console.log(obj3)





// database se esi values aati h  jyadatar uske liye padh lein thoda bhut
const users = [
    {
    id:1 ,
    email:"ombilthere@gmail.com"
    },
    {
    id:1 ,
    email: "ombilthere@gmail.com"
    } ,
    {
    id:1 ,
    email: "ombilthere@gmail.com"
    }
]

users[1].email // accessing







// console.log(tinderUser)

// console.log(Object.keys(tinderUser)); // ye array type  m aata h isiliye hum ise looping krke bhi access kr skte h aur ye bhut jarori h
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // array ke andar array deta h jisme ek index pe uske key value dono hote h
// console.log(tinderUser.hasOwnProperty('name')) //ye btata h ki kya ye key exist krti h ya nhi true ya false 

//////  part-2 /////

const course = {
    courseName: "Js master" ,
    price : "999" ,
    courseInstructor: "Hitesh"
}
// course.courseInstructor - isse hum is key value ko access kr skte h lekin maanlo hme ye kai baar chahiye h to 
// baar baar likhna accha nhi hoga 

const {courseInstructor} = course
console.log(courseInstructor) // ab hume isse direct codeInstructor ki value milegi . lgane ki need khtm
// ab maanlo mere ye naam bhut bada h aur m iska name short krna chahta hoon to 

const {courseName : CN} = course // yaha courseName ka naam ab CN h 
console.log(CN)


// ye thoda beeech m react ka bta diya h usme bhi destructuring hoti h jaise upar hui h

// const navbar = () => {

// }
// navbar({company: "Om"})
// upar prblm ye h ki kaun bheje neeche se call krke argument (props bolte h inhe)
// to uski jgh hum use krenge neeche wlaa

// const navbar= ({company}) => {
 
// }



//  Api call se json format m aata h data phle xml aata tha
// 1. JSON file ka format (normally yahi use hota h)
// {
//   "name" : "om" , 
//   "clg" : "SRIT",
//   "sem" : "5th" 
// }
// 2. Array ke form m bhi aata h data jisme andar object hote h
// [
//     {} , 
//     {} 

// ]



