import { User} from '../models/User';
import { UserProps } from '../interfaces/UserProps';
import { View } from '../views/View';

export class UserForm extends View<User, UserProps> {

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick
    };
  }

  onSetNameClick = () => {
    const input = this.parent.querySelector('input');

    if (input) {
      const name = input.value;

      this.model.set({ name })
    }
  }

  onSetAgeClick = () => {
    this.model.setRandomAge();
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <input />
        <button class="set-name">Change name</button>
        <button class="set-age">Set Random Age</button>
      </div>
    `
  }
}