// const numbers = [1, 2, 3, 4];
// console.log(numbers);

// //const moreNums = new Array("zahiq","ibrahim");

// //const moreNums = new Array(6); this creates an array with size 6
// //console.log(moreNums);

// //use this if you have an iterable object that needs to be converted into array
// const moreNums = Array.from("Hello!");
// console.log(moreNums);

// const listItems = document.querySelectorAll("li");
// const itemsInArray = Array.from(listItems);

// console.log(listItems); // this is array like
// console.log(itemsInArray); // this is in real array

// //you can have mixed arrays
// const personalData = [30, "zahiq", { moreDetails: [] }];



// //multidimentional
// const twoDArray = [
//   [1, 2, 3],
//   [4, 5, 6, 3],
// ];

// for (const data of twoDArray) {
//   for (const dataPoints of data) {
//     console.log(dataPoints);
//   }
// }

// //Arrays are index based
// console.log(personalData[1]);


// const hobbies = ["cooking", "reading"];
// console.log(hobbies);

// //adds element at front
// hobbies.unshift("coding");

// hobbies.push("sports");

// const poped = hobbies.pop();

// //removes element from front and shifts all elements left by one
// hobbies.shift();

// console.log(hobbies);

// // splice() is only available on real arrays
// //splice(start, end, "Good");

// hobbies.splice(1, 0, "Good");
// console.log(hobbies);

// //removes element at the location
// hobbies.splice(0,1);
// console.log(hobbies);


// //selecting ranges
// const testResults = [1,2,3,4,6,3,2];
// //const newArray = testResults.slice(0,2);

// //this returns totaly new array with new memory location
// const newArray = testResults.concat([5,53,2,4,6,5,4]);

// //copies array 0 to 2
// //if one changes other changes as well
// console.log(testResults, newArray);

// //returns the index of the given element it stops at the first item found
// console.log(testResults.indexOf(3));

// console.log(testResults.includes(3));


// const personalData = [ {name: "zahiq"}, {name: "Ibrahim"}];

// const zahiq = personalData.find((person, index, persons) => {
//     return person.name === 'zahiq';
// });

// zahiq.name = "Zahiq";

// console.log(zahiq);

// const zahiqIndex = personalData.findIndex((person, index, persons) => {
//     return person.name === 'Zahiq';
// });

// console.log(zahiqIndex);


// const prices = [10.99, 4.3, 78.32, 3.4];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// for(const price of prices){
//     taxAdjustedPrices.push(price * (1 + tax));
// }

// console.log(taxAdjustedPrices);

// const sortedPrices = prices.sort( (a, b) => {
//     if (a > b){
//         return 1;
//     }else if( a == b){
//         return 0;
//     }else{
//         return -1;
//     }
// });
// console.log(sortedPrices.reverse());

// const filteredArray = prices.filter((price, index, prices) =>{
//     return price > 6;
// });

// console.log(filteredArray);

// // reduce()
// const sum = prices.reduce( (prevValue, curValue, curIndex, prices)=>{
//     return prevValue + curValue;
// }, 0);

// console.log(sum);

// const data = "hello;world;!";
// const transformedData = data.split(';');
// console.log(transformedData);

// const nameFragments = ["zahiq", "Ibrahim"];
// const name = nameFragments.join(" ");
// console.log(name);

// // ... this is known as Spread Operator
// const copiedNameFragments = [...nameFragments];
// console.log(nameFragments, copiedNameFragments);

// //this doesnt work because prices is an array
// //console.log(Math.min(prices));
// console.log(Math.min(...prices));

// //array destructuring
// const data = ["Zahiq", "Ibrahim"];
// const [firstName, lastName] = data;

// console.log(firstName, lastName);



