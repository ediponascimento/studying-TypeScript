import 'reflect-metadata';

@controller
class Plane {
  color: string = 'red';

  @get('/login')
  fly(): void {
    console.log('vrrrrrr');
  }
}

function get(path: string) {
  return function (target: Plane, key: string): void {
    Reflect.defineMetadata('path', path, target, key);
  }
}

function controller(target: typeof Plane) {
  for (let key in target.prototype){
    const secret = Reflect.getMetadata('path', target.prototype, key);
    const middleware = Reflect.getMetadata('middleware', target.prototype, key)

    router.get(path, middleware taget.prototype[key]);
  }
}