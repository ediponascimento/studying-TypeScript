"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var Methods_1 = require("./Methods");
var MetadataKeys_1 = require("./MetadataKeys");
function routeBind(method) {
    return function (path) {
        return function (target, key) {
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.path, path, target, key);
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.method, method, target, key);
        };
    };
}
exports.routeBind = routeBind;
exports.get = routeBind(Methods_1.Methods.get);
exports.put = routeBind(Methods_1.Methods.put);
exports.post = routeBind(Methods_1.Methods.post);
exports.del = routeBind(Methods_1.Methods.del);
exports.patch = routeBind(Methods_1.Methods.patch);
