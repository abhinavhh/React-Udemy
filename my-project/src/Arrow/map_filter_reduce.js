// Using arrow functions with array methods

const numbers=[1,2,3,4,5]

//using map function to create a new array with each number doubled
const doubled = numbers.map(n => n*2)
console.log(doubled)

//using filter function to create a new array having only even numbers
const evens = numbers.filter(n => n % 2 === 0)
console.log(evens)

//usind reduce function to calculate the sum of numbers
const sum = numbers.reduce((total , n) => total + n , 0)
console.log(sum)