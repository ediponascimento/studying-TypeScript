import { User } from './models/User';

const user = new User({ name: 'Enzo Nascimento', age: 4 });

user.on('save', () => {
    console.log('A new user was created');
});

user.on('error', () => {
    console.log('An error has ocurred');
})

user.on('change', () => {
    console.log('user has been changed');
})

user.save();