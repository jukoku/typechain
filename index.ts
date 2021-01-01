interface Human {
  name: String;
  age: number;
  gender: String;
}

const person = {
  name: "Jinho",
  age: 22,
  gender: "male",
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name} You are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(person));

export {};
