import axios, { AxiosResponse } from 'axios';
import { UserProps } from '../interfaces/UserProps';
import { Eventing } from './Eventing';

export class User {

  constructor(private data: UserProps) { }
  public events: Eventing = new Eventing();

  get(propName: string): UserProps {
    return this.data[propName];
  }

  set(user: UserProps): void {
    Object.assign(this.data, user);
  }
}