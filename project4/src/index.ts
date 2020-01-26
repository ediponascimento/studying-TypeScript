import { User } from './models/User';

const user = new User({});

user.on('change', () => {
  console.log('#change 1');
});
user.on('change', () => {
  console.log('#cgange 2');
});
user.on('save', () => {
  console.log('Save was triggered');
});

user.trigger('change');
user.trigger('save');
