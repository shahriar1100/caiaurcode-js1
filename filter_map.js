// const books = [
//   { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//   { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//   { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//   { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//   { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//   { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//   { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//   { title: 'Book Eight', genre: 'Science', publish: 2001, edition: 2005 },
//   { title: 'Book Nine', genre: 'Fiction', publish: 1995, edition: 2003 },
//   { title: 'Book Ten', genre: 'Non-Fiction', publish: 2004, edition: 2012 },
//   { title: 'Book Eleven', genre: 'History', publish: 1990, edition: 1998 },
//   { title: 'Book Twelve', genre: 'Science', publish: 2011, edition: 2016 },
//   { title: 'Book Thirteen', genre: 'Fiction', publish: 2007, edition: 2015 },
//   { title: 'Book Fourteen', genre: 'Non-Fiction', publish: 1998, edition: 2006 },
//   { title: 'Book Fifteen', genre: 'History', publish: 2003, edition: 2011 }
// ];

// let userBooks = books.filter( (bk) => bk.genre === 'History')

// userBooks = books.filter( (bk) => {
//     return bk.publish >= 1990 && bk.genre === 'Science'
// })
// console.log(userBooks);

// =====================================================

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map((num) => {return num + 10});
// const newNums = myNumbers
//                 .map((num) => num * 10)
//                 .map((num)=> num + 1)
//                 .filter((num)=> num >= 50)
// console.log(newNums);


const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr)=> acc+curr, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 5555
    },
    {
        itemName: "mobile dev",
        price: 5005
    },
    {
        itemName: "java course",
        price: 9999
    },
    {
        itemName: "python course",
        price: 80000
    },
]


const priceToPay = shoppingCart.reduce((acc, item)=> acc + item.price, 0)
console.log(priceToPay);
