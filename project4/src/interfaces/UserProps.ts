import { AxiosPromise, AxiosResponse } from 'axios';

export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

export interface HasId {
  id?: number;
}

export interface ModelAttributes<T> {
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
  set(update: T): void;
}

export interface Sync<T> {
  fetch(id: number): AxiosResponse;
  save(data: T): AxiosPromise;
}

export interface Events {
  on(eventName: string, callback:() => void): void;
  trigger(eventName: string): void;
}