class Boot {
    color: string = 'Red';

    get getColor(): string {
        return `The color is ${this.color}`;
    }

    @testDecorator
    showColor(): void {
        console.log(`I'm a method`);
    }
}

function testDecorator(target: any,  key: string): void {
    console.log('Target', target);
    console.log('Key', key);
}