// for
for (let index = 0; index < 10; index++) {
  // const element = index;
//   console.log(index);
}

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newNums = myNum.filter( (num) => num > 4 )

// let newNums = myNum.filter( (num) => {
//    num > 4
// } );


// scope er moddhe kicu thakle must return return kore dite hobe 
let newNums = myNum.filter( (num) => {
   return num > 4
} )

console.log(newNums);

