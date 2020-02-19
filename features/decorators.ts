class Boat {
    color: string = 'Red';

    get getColor(): string {
        return `The color is ${this.color}`;
    }

    @logError('Opps! Boat was sink')
    showColor(): void {
        throw new Error();
        console.log(`I'm a method`);
    }
}
function logError(errorMessage: string) {
    return function (target: any, key: string, desc: PropertyDescriptor): void {
        const method = desc.value;

        desc.value = function () {
            try {
                method();
            } catch (err) {
                console.log(errorMessage);
            }
        }
    }
}


new Boat().showColor();