import { Collection } from "./models/Collection";
import { User } from './models/User';
import { UserProps } from './interfaces/UserProps';

const collection = User.buildUserCollection();

collection.on('change', () => {
    console.log(collection);
})

collection.fetch();

