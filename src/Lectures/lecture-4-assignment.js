//task1

function add(x) {
  return function(y) {
      return x + y;
  };
}

console.log(add(2)(3))
console.log(add(1)(2))

//task  2

/*
შევქმნათ ფუნქცია რომელიც მიიღებს N რაოდენობის არგუმენტებს (number-ებს). 
ამ ფუნქციამ უნდა დააბრუნოს ფუნქცია, რომელიც მიიღებს ერთ n არგუმენტს.
მეორე ფუნქციამ უნდა დააბრუნოს პირველი ფუნქციის არგუმენტების გა-n-მაგებული მნიშვნელობების ჯამი.
*/


function multipliedSum(...args) {
  return function(n) {
   
    return args
    .map((x) => x*n)
    .reduce(function(acc,curr) {
      return (acc+curr)
    })
  }
}

multipliedSum(1, 2, 3, 4)(2) // => 20
multipliedSum(1, 2)(3) // => 9
multipliedSum(0)(20) // => 0


// task 3 

//Write a function addsuffix which returns a function to add suffixes

function addSuffix(x) {
  return function(y) {
      return y+x;
  };
}

const addLy = addSuffix('ly');

addLy('hopeless'); // hopelessly
addLy('total'); // totally

const addLess = addSuffix('less');

addLess('fear'); // fearless
addLess('ruth'); // ruthless

console.log(addLy('friend'))
console.log(addLy('total'))
console.log(addLess('fear'))
console.log(addLess('ruth'))


//// task4 


const first = {
  a: 1,
  b: 2,
  c: 3
};

const second = {
  d: 4,
  e: 5,
  f: 6
};

const third = {
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11
};

/*
// result should be this
{
  bb: 4,
  dd: 8,
  ff: 12,
  hh: 16,
  jj: 20
}

*/

function doTheMagic() {
  // do the magic here
  let merged = {...first, ...second, ...third};
  return merged
}
console.log(doTheMagic())

//task 5 

let a = 3;
let b = 4;

let temp = a;
a = b;
b = temp;

// This is variable value swapping."a" become b and "b" becomes a
//Do the same thing with ES6 array destructing

[a,b] = [b,a]

console.log(a)
console.log(b)