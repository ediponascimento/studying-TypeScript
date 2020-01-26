import { UserProps } from '../interfaces/UserProps';
import { Calback } from '../types/UserType';

export class User {
  events: { [key: string]: Calback[] } = {};

  constructor(private data: UserProps) { }

  get(propName: string): UserProps {
    return this.data[propName];
  }

  set(user: UserProps): void {
    Object.assign(this.data, user);
  }

  on(eventName: string, callback: Calback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach(calback => calback());
  }
}