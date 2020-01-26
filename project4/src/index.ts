import { User } from './models/User';

const user = new User({});

user.set({name: 'Édipo Nascimento', age: 32});

console.log(user.get('name'));
console.log(user.get('age'));
