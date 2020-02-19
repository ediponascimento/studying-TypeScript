class Boat {
    color: string = 'Red';

    get getColor(): string {
        return `The color is ${this.color}`;
    }

    @logError
    showColor(): void {
        throw new Error();
        console.log(`I'm a method`);
    }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function() {
        try {
            method();
        } catch (err) {
            console.log('Opps, boat wad sunk');
        }
    }
}

new Boat().showColor();