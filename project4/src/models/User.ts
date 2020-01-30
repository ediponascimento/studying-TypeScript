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

  fetch(): void {
    axios.get(`http://localhost:3000/users/${this.get('id')}`)
    .then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  save(): void {
    const id = this.get('id');

    if(id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post(` http://localhost:3000/users/`, this.data);
    }
  }
}