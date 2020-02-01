export class Attributes<T> {
  constructor(private data: T) { }

  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(user: T): void {
    Object.assign(this.data, user);
  }
}

const attr = new Attributes({
  id: 5,
  age: 25,
  name: 'Édipo Nascimento'
});

const id = attr.get('id');
const name = attr.get('name');
const age = attr.get('age');