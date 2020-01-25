const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true
};

const printVehicle = (veichle: { name: string; year: number; broken: boolean }): void => {
  console.log(`Name ${veichle.name}`);
  console.log(`Year: ${veichle.year}`);
  console.log(`Broken?: ${veichle.broken}`);
}

printVehicle(oldCiviv);