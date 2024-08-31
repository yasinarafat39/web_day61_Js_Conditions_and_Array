const numbers = [21, 44, 58, 90, 66, 54, 85, 48];

// console.log(numbers);
// console.log(numbers.length);

// get element value by index
const fourth = numbers[3]; // 90
// console.log(fourth);

// set or update element value by index
numbers[0] = 100;
// console.log(numbers); // [100, 44, 58, 90, 66, 54, 85, 48]

// add new element in Array by push() method. push() method add element at the last of Array.
numbers.push(200, 300);
// console.log(numbers); // [100, 44, 58, 90, 66, 54, 85, 48, 200, 300]

// remove the last element of the Array by using pop() method.
numbers.pop();
// console.log(numbers); // [100, 44, 58, 90, 66, 54, 85, 48, 200]
numbers.pop();
// console.log(numbers); // [100, 44, 58, 90, 66, 54, 85, 48]

// add new element at the start in the Array by using Unshift() method.
numbers.unshift("Arafat");
// console.log(numbers); // ['Arafat', 100, 44, 58, 90, 66, 54, 85, 48]
numbers.unshift("Yasin");
// console.log(numbers); // ['Yasin', 'Arafat', 100, 44, 58, 90, 66, 54, 85, 48]

// remove the first element from array by using shift() method.
numbers.shift();
// console.log(numbers); // [ 'Arafat', 100, 44, 58, 90, 66, 54, 85, 48 ]
numbers.shift();
// console.log(numbers); // [ 100, 44, 58, 90, 66, 54, 85, 48 ]

// includes() method (case sensitive) take array element as a parameter for search in array and return true or false.
const friends = ["Naeem", "Rana", "Muzammel", "Arman"];
// console.log(friends.includes("Muzammel")); // true

// indexOf() method to find index number of array element you want
// console.log(friends.indexOf("Rana")); // 1
// console.log(friends.indexOf("Arman")); // 3

// Array.isArray() method to check is it array or not.
const fun = "";
const fruits = [];
const fruits2 = "[]";
// console.log(Array.isArray(fun)); // false
// console.log(Array.isArray(fruits)); // true
// console.log(Array.isArray(fruits2)); // false

// join() method
const joinedNumAndFriends = numAndFriends.join(" ");
// console.log(joinedNumAndFriends); // Naeem Rana Muzammel Arman 100 44 58 90 66 54 85 48

// concat() method
const numAndFriends = friends.concat(numbers);
// console.log(numAndFriends); // [ 'Naeem', 'Rana','Muzammel', 'Arman', 100, 44, 58, 90, 66, 54, 85, 48 ]


// slice() method  
const newNumAndFriends = [ 'Naeem', 'Rana','Muzammel', 'Arman', 100, 44, 58, 90, 66, 54, 85, 48 ];
const slicedArray = newNumAndFriends.slice(3, 6) // ['Arman', 100, 44]
// console.log(slicedArray);


// splice() method
const splicedArray = newNumAndFriends.splice(7, 4, "Rajon", "Nazim Uddin");
console.log(newNumAndFriends);
