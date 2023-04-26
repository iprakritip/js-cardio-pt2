// ## Array Cardio Day 2
// alert("hello")
const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// check if one or more person is 19 or older

// const adults = people.some((person) => {
//     const now = new Date
//     const currentYear = now.getFullYear();
//     console.log(currentYear);
//     return currentYear - person.year >= 19
// })
// console.log(adults)

// Array.prototype.every() // is everyone 19 or older?
//check if all the people are 19 or older
// const allAdults = people.every((person) => {
//     const currentYear = (new Date).getFullYear();
//     if (currentYear - person.year >= 19) {
//         return true
//     }

// })
// console.log(allAdults);

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
//   const partID = comments.find((comment)=>{
//     return comment.id===823423
//   })
//   console.log(partID);

  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423
const index= comments.findIndex((comment)=>{
    return comment.id === 823423
})
console.log(index);
comments.splice(index, 1)
console.log(comments);