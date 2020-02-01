import { UserProps } from '../interfaces/UserProps';
import { Eventing } from './Eventing';
import { Sync } from '../models/Sync';

const rootUrl = 'http://localhost:3000/users';

export class User {

  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
}