import { UserProps } from '../interfaces/UserProps';
import { Calback } from '../types/UserType';

export class User {
  constructor(private data: UserProps) { }

  get(propName: string): UserProps {
    return this.data[propName];
  }

  set(user: UserProps): void {
    Object.assign(this.data, user);
  }

  on(eventName: string, callback: Calback) {

  }

}