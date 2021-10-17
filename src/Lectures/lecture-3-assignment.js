const people = [
  {
    name: 'Ben',
    age: 30,
    occupation: 'Banker',
    salary: 3000,
    pets: [],
  },
  {
    name: 'Jane',
    age: 26,
    occupation: 'Teacher',
    salary: 1200,
    pets: ['dog'],
  },
  {
    name: 'John',
    age: 31,
    occupation: 'Developer',
    salary: 4000,
    pets: ['dog', 'cat'],
  },
  {
    name: 'Mike',
    age: 26,
    occupation: 'Developer',
    salary: 5000,
    pets: [],
  },
  {
    name: 'Tom',
    age: 34,
    occupation: 'Teacher',
    salary: 3400,
    pets: ['dog', 'parrot'],
  },
];

// 1. Calculate sum of all teacher salaries

let sum_teacher_salaries = people
  .filter((x) => x.occupation === 'Teacher')
  .reduce((accumulator, x) => {
    return accumulator + x.salary;
  }, 0);

console.log(sum_teacher_salaries);

// 2. Create a new array with the same people but double salaries of developers

const people_with_double_salaries = people.map((x) => {
    if(x.occupation === "Developer"){
    return{ 
      name: x.name, 
      age: x.age,
      occupation: x.occupation,
      salary: x.salary * 2,
      pets: x.pets
    }
    }
    return x
  });
  console.log(people_with_double_salaries);

/*
const preople2 = people.map((x) => x.occupation === 'Developer' ? {...x, salary: x.salary*2} : x
);
  */
  
// 3. Filter people who has a dog

const people_with_dog = people.filter((x) => {
  return x.pets.includes('dog');
});
console.log(people_with_dog);

// 4. Figure out if all the people have pets or not

let people_with_pet = people.filter((x) => x.pets != '');
console.log(people_with_pet); //filters out people who has pets

const everyoneHasPets = people.every(x => x.pets.length);
console.log(everyoneHasPets) //returns false value

// 5. Figure out if any of the people are above age 30

let people_above_age = people.filter((x) => x.age > 30);
console.log(people_above_age); //filters people whose age is above 30

let peopleAboveAge = people.filter((x) => x.age > 30);
console.log(peopleAboveAge);  //returns true value

///////////////////////////////////////////

// flatten arrays into a single array

function flatten(arr) {
  // your code here
  return arrays.concat.apply([], arr);
}

const arrays = [['first', 'second'], [1, 2, 3], [true]];

console.log(flatten(arrays)); // ['first', 'second', 1, 2, 3, true],

///////////////////////////////////////////

const voters = [
  { name: 'Ben', age: 30, voted: false },
  { name: 'Jane', age: 32, voted: true },
  { name: 'John', age: 25, voted: true },
  { name: 'Mike', age: 20, voted: false },
  { name: 'Tom', age: 21, voted: true },
  { name: 'Ben', age: 55, voted: false },
  { name: 'Jane', age: 35, voted: true },
  { name: 'John', age: 58, voted: false },
  { name: 'Mike', age: 43, voted: false },
  { name: 'Tom', age: 45, voted: true },
];

// How many  voters?
let count = Object.keys(voters).length;
console.log(count); //10..

let voterNum = voters.filter((x) => x.svoted == true).length;


console.log(voterNum); // 5 people voted

///////////////////////////////////////

// implement map, filter, every, reduce
//let's calculate average age of voters

const avg = voters.reduce((a, b) => a + b.age, 0) / voters.length;

console.log(avg);

//let's filter people whose name is Tom

let name = voters.filter((x) => x.name === 'Tom');
console.log(name);
