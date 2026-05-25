// Ways of declearing String

let name = "Yashraj sahu"
let collageName = 'LNCT'
let intrests = `Loves to watch anime and play 
 games`  //This method is mostly used 
 

 let collage= `Oriental`
 console.log(collage.length);
 console.log(collage[0]);

 // Strings are inmutable means the letters of it cannot be changed
//collage[3] = L; Wrong 
// console.log(collage);

// Some other methods on Strings

console.log(collage.toUpperCase) // Will be converted into uppercase (it is providing new string as the strings aree inmutable they cannot be cahnged)

const a = collageName.toUpperCase();
console.log(a);

console.log(collageName.toLowerCase); // For lowercase

const str = `Being insane ain't that bad`
console.log(str.slice(2,7)); //Output : ing in (Trimed the string)

const str2 = `I am a springboot dev`
console.log(str2.substring(2,5));
//output : am (doing same work )


// Joining two Strings

const x = `Yash`
const y = `raj`
const z = `Sahu`
const s = x+ y + " " + z;
console.log(s);

console.log(24 + `Yash`); // output : 24Yash
console.log(24+7 + `Yash`); // output : 31Yash






 