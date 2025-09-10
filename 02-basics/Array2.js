const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman" , "flash" , "batman"]

//marvel.push(dc)
// console.log(marvel)

// ab isme lagega ki dono array merge ho jayenge but esa nhi h
// isme hota ye h ki marvel ke andar poora dc agle index pe insert ho jata h 
// jo is baat ko bhi prove krta h ki array m koi bhi element insert kr skte h means array ke andar
// array bhi
//console.log(marvel[3[1]) ye op dega flash


//  merging by concat

// marvel.concat(dc)
// console.log(marvel) // iska ouput purana marvel hi aayga 
// agar concat use krna h to new array bnana padega


const allHero = marvel.concat(dc)
//console.log(marvel)
// ab isme dono array merge ho jaayenge

// ab  merge ke liye isse bhi acchi method h 
//  spread 

const new_allHero = [...marvel , ...dc]
//console.log(new_allHero)


const arr =  [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const flat_arr = arr.flat(Infinity) // flat krke de deta h poore array ko argument m jitni depth tk 
// flat krna h utni pass krte h hume poora krna tha to infinity pass kr diya
//console.log(flat_arr)

console.log(Array.isArray("OmBilthere")) // ye btata h ki array h ya nhi ab ye string h to false return hoga
console.log(Array.from("OmBilthere"))  // ye badal dega array m string ko

// ab maanlo neeche wala case
console.log(Array.from({name : "ombilthere"}))
// ab ye pechan hi nhi payga ki kisko convert krna h to [] empty array de dega

let score1 = 100
let score2 =200
let score3 =300
console.log(Array.of(score1, score2 , score3)); // array m badal dega variable value jo upar defined h


