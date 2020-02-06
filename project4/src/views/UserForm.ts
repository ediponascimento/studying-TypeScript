export class UserForm {

  constructor(public parent: Element) { }

  template(): string {
    return `
      <div></div>
      <input />
    `
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.parent.append(templateElement.content);
  }
}