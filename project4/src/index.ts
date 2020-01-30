import { User } from './models/User';

const user = new User({ age: 7, name: 'Sophia Nascimento' });

user.events.on('change', () => {
    console.log('#change');
});

user.events.trigger('change');
