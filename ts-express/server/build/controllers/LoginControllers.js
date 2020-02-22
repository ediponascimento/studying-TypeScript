"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("./decoretors/routes");
var controller_1 = require("./decoretors/controller");
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.getLogin = function (req, res) {
        res.send("\n  \n    <form method=\"POST\">\n      <div>\n        <label>Email</label>\n        <input type=\"email\" name=\"email\" placeholder=\"e-mail\"/>\n      </div>\n      <div>\n        <label>Password</label>\n        <input type=\"password\" name=\"password\" placeholder=\"password\"/>\n      </div>\n      <button type=\"submit\">Login</button>\n    </form>\n  ");
    };
    __decorate([
        routes_1.get('/login')
    ], LoginController.prototype, "getLogin", null);
    LoginController = __decorate([
        controller_1.controller('/auth')
    ], LoginController);
    return LoginController;
}());
