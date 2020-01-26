import { UserProps } from '../interfaces/UserProps';
import { UserType } from '../types/UserType';


export class User {
  constructor(private data: UserProps) { }

  get(propName: string): UserType {
    return this.data[propName];
  }

  set(user: UserProps): void {
    Object.assign(this.data, user);
  }
  
}