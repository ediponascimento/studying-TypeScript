import { Calback } from '../types/UserType';

export class Eventing {
    events: { [key: string]: Calback[] } = {};

    on = (eventName: string, callback: Calback): void => {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    trigger = (eventName: string): void => {
        const handlers = this.events[eventName];

        if (!handlers || handlers.length === 0) {
            return;
        }

        handlers.forEach(calback => calback());
    }
}