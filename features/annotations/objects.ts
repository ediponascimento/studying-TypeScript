const profile = {
  name: 'Édipo Nascimento',
  age: 20,
  cords: {
    lat: 10,
    lng: 20
  },
  setAge(age: number): void {
    this.age = age
  }
};

const { age, name }: { age: number, name: string } = profile
const {
  cords: { lat, lng }
}: { cords: { lat: number, lng: number } } = profile;