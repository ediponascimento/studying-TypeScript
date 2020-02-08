import { Model } from '../models/Model';
import { UserProps } from '../interfaces/UserProps';
import { Attributes } from '../models/Attributes';
import { ApiSync } from '../models/ApiSync';
import { Eventing } from '../models/Eventing';
import { Collection } from '../models/Collection';


const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    )
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(
      rootUrl,
      (json: UserProps) => User.buildUser(json)
    );
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age })
  }

}
