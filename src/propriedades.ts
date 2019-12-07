interface Person {
  name: string;
  age: number;
}

function displayUserInfo(person : Person) {
  console.log(`person ${person.name} is ${person.age} anos`); 
}

let person = {
  name: 'Édipo Nascimento',
  age: 31
};

displayUserInfo(person);