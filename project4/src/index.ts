import { User } from './models/User';

const user = new User({ age: 7, name: 'Sophia Nascimento' });

console.log(user.get('name'));
user.on('change', () => {
    console.log('user was change');
})

user.trigger('change');