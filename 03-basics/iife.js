// immediately Invoked Function Expression (IIFE)

// global scope se cheeje disturb na ho isilie iffe use krte h

(
    function chai() {
        // it is named iffe becoz it has name
    console.log(`DB Connnected`);
}) () ;


(
  (name)=> {
    // unnamed iffe
    console.log(`DB Connected 2 ${name}`)
  }
) ('Om')

// upar wala semicolon lgana hi padega nhi to neeche wala func error dega 
//  jab 2 iffe func likhte h to first invoke function ko btanaa padta h ki kaha context rokna h ek aur semicolon lgake use rok dete h
// last m lge bracket same function call wale args jaise h naam bas nhi likhte func ka unme parameter bhi pass kr skte h
// type kuch bhi ho skta h arrow ya normal func



