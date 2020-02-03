import { User } from './models/User';

const user = User.buildUser({ id: 1 });

user.on('change', () => {
    console.log('user has been changed');
})

console.log(user)
user.fetch();

