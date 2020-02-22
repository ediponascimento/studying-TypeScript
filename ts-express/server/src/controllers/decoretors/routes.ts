import 'reflect-metadata';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';

export function routeBind(method: string) {
  return function (path: string) {
    return function (target: any, key: string) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.path, method, target, key);
    }
  }
}

export const get = routeBind(Methods.get);
export const put = routeBind(Methods.put);
export const post = routeBind(Methods.post);
export const del = routeBind(Methods.del);
export const patch = routeBind(Methods.patch);
