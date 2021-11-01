interface User {
    id: string;
    name: string;
    age: number;
    role: "admin" | "moderator" | "user";
    occupation: string;
}

// 1. create type in which all User properties will be optional
const user: Partial<User> = {
    id: "1235",
    name: "Keti",
    age: 24,
    role: "user",
    occupation: "developer"
}

console.log(user.id)

// 2. create type from User and remove "age" property from it

type RemoveAgeFromUser<User> = {
    [Property in keyof User as Exclude<Property, "age">]: User[Property]
};

type UserWithoutAge = RemoveAgeFromUser<User>;

const changedUser: UserWithoutAge = {
    id: '1243',
    name: 'Keti',
    role: 'user',
    occupation: 'Developer'
}

// 3. create type in which all the keys will be from User and their types will be boolean

  type booleanType<User> = {
    [Property in keyof User]: boolean;
  };

  const userWithBooleanProperties: booleanType<User>= {
    id: true,
    name: true,
    age: false,
    role: true,
    occupation: false
  }

// 4. pick id and name from User into another type and make them readonly 

  type CreateReadOnly<User> = {
    -readonly [Property in keyof User]: User[Property];
  };
   
 
type UserReadOnlyProperties = {
    readonly id: string;
    readonly name: string;
};

// type UserWithReadonly = CreateReadOnly<UserReadOnlyProperties>;

const user_read_only: UserReadOnlyProperties = {
    id: "1235",
    name: "Keti"
}

// user_read_only.name  = 'ketevani'

// 5. write new type Replace<T, K, U> which will do the folloing: Replace K from T with U


type Replace<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;
type Final = Replace<User, { id: number }>

//usage:
// const user_final: Final = {
//   id: 'sghsh',
//   name: 'keti',
//   age: 24,
//   role: 'user',
//   occupation: 'developer'
// }