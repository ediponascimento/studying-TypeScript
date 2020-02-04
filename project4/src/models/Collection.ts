import { User } from '../models/User';
import { Eventing } from '../models/Eventing';

export class Collection {
    models: User[] = [];
    events: Eventing = new Eventing();

    get on() {
        return this.events.on
    }

    get trigger() {
        return this.events.trigger;
    }

}