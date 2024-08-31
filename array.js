const numbers = [21, 44, 58, 90, 66, 54, 85, 48];

console.log(numbers);
console.log(numbers.length);


// get element value by index 
const fourth = numbers[3]; // 90
console.log(fourth);

// set or update element value by index 
numbers[0] = 100;
console.log(numbers); // [100, 44, 58, 90, 66, 54, 85, 48]


// add new element in Array by push() method. push() method add element at the last of Array.
numbers.push(200, 300)
console.log(numbers); // [100, 44, 58, 90, 66, 54, 85, 48, 200, 300]


// remove the last element of the Array by using pop() method. 
numbers.pop()  
console.log(numbers); // [100, 44, 58, 90, 66, 54, 85, 48, 200]
numbers.pop()  
console.log(numbers); // [100, 44, 58, 90, 66, 54, 85, 48]


// add new element at the start in the Array by using Unshift() method. 
numbers.unshift("Arafat")
console.log(numbers); // ['Arafat', 100, 44, 58, 90, 66, 54, 85, 48]
numbers.unshift("Yasin")
console.log(numbers); // ['Yasin', 'Arafat', 100, 44, 58, 90, 66, 54, 85, 48]


// remove the first element from array by using shift() method.
numbers.shift();  
console.log(numbers); // [ 'Arafat', 100, 44, 58, 90, 66, 54, 85, 48 ]
numbers.shift();  
console.log(numbers); // [ 100, 44, 58, 90, 66, 54, 85, 48 ]

