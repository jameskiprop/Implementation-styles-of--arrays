let numArr = [12, 34, 56, 75, 79, 76];
// for (let i = 0; i < numArr.length; i++) console.log[i];
//Without for loop
console.log("without the loop:");
console.log(numArr[0]);
console.log(numArr[1]);
console.log(numArr[2]);
console.log(numArr[3]);
console.log(numArr[4]);
console.log(numArr[5]);

//FOR LOOP
console.log("");
console.log("Using the FOR LOOP");
for (let i = 0; i < numArr.length; i++) {
  console.log(numArr[i]);
}
// using the WHILE LOOP
console.log("");
console.log("using the WHILE LOOP");
let i = 0;
while (i < numArr.length) {
  console.log(numArr[i]);
  i++;
}
//using the DO WHILE LOOP
console.log("");
console.log("using the do while method");
// let i = 0;
do {
  numArr[i] += 1;
  i++; //increments each element in the numArr array by 1
} while (i < numArr.length);
console.log(numArr);

// using a for...of method
console.log("");
console.log("using the for..of method");
for (let i of numArr) {
  console.log(numArr);
}
// using a forEach method
console.log("");
console.log("using the forEach method");
numArr.forEach((i) => (i += 1));
console.log(numArr);

// //using a map method
console.log("");
console.log("using the MAP METHOD");

let thisArr = numArr.map((i) => (i += 1));

console.log(thisArr);

let nums = [1,2,3];
console.log("Nums:", nums);

let nums2 = nums.map(function(el)){
  return el + 1;
}
console.log("Nums2:", nums2);

let nums3 = nums.map((el)=>{return el+3});




// //Using a reduce method
// console.log("");
// console.log("using the reduce method");

// //Using a for....in method
// console.log("");
// console.log("using the for....in method");

// //Using the Array.prototype.every.method
// console.log("");
// console.log("using the array.prototype.every method");

const items = [
  { name: "bike", price: 200 },
  { name: "Tv", price: 100 },
  { name: "Album", price: 10 },
  { name: "book", price: 500 },
  { name: "Phone", price: 1000 },
  { name: "Computer", price: 25 },
];

const filteredItems = items.map((item) => {
  return item.price <= 100;
});
