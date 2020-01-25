class Dog {
  
  private name: string;
  
  constructor(name: string) {
    this.name = name;
  }

  sayName (): void {
    console.log(this.name);
  }

}

let dog = new Dog('Billy');
dog.sayName();