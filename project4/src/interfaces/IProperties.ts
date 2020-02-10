import { AxiosPromise } from 'axios';

export interface HasId {
  id?: number;
}

export interface ModelAttributes<T> {
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
  set(update: T): void;
}

export interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

export interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}
