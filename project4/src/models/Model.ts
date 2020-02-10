import { AxiosResponse } from 'axios';
import { ModelAttributes, Sync, Events, HasId } from '../interfaces/IProperties';

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) { }

  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }

    this.sync.fetch(id).then(
      (response: AxiosResponse): void => {
        this.set(response.data);
      }
    );
  }

  save(): void {
    this.sync.save(this.attributes.getAll())
    .then((response: AxiosResponse): void => {
      this.trigger('save');
    })
    .catch(err => {
      this.trigger('error')
    });
  }
}