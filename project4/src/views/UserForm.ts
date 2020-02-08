import { User} from '../models/User';
import { UserProps } from '../interfaces/UserProps';
import { View } from '../views/View';

export class UserForm extends View<User, UserProps> {

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveClick
    };
  }

  onSaveClick = () => { 
    this.model.save();
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
        <input placeholder="${this.model.get('name')}" />
        <button class="set-name">Change name</button>
        <button class="set-age">Set Random Age</button>
        <button class="save-model">Save user</button>
      </div>
    `
  }
}