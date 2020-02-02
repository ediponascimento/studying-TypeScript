import { Model } from '../models/Model';
import { UserProps } from '../interfaces/UserProps';
import { Attributes } from '../models/Attributes';
import { ApiSync } from '../models/ApiSync';
import { Eventing } from '../models/Eventing';


const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> { 
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    )
  }
}
