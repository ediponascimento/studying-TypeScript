"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var decoretors_1 = require("./decoretors");
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.getLogin = function (req, res) {
        res.send("\n  \n    <form method=\"POST\">\n      <div>\n        <label>Email</label>\n        <input type=\"email\" name=\"email\" placeholder=\"e-mail\"/>\n      </div>\n      <div>\n        <label>Password</label>\n        <input type=\"password\" name=\"password\" placeholder=\"password\"/>\n      </div>\n      <button type=\"submit\">Login</button>\n    </form>\n  ");
    };
    LoginController.prototype.getLogout = function (req, res) {
        req.session = undefined;
        res.redirect('/');
    };
    LoginController.prototype.postLogin = function (req, res) {
        var _a = req.body, password = _a.password, email = _a.email;
        if (email && password && email === 'edipoesn@gmail.com' && password === 'teste') {
            // mark this person as logged in
            req.session = { loggedIn: true };
            // redirect them to the root route
            res.redirect('/');
        }
        else {
            res.send('Invalid email or password');
        }
    };
    __decorate([
        decoretors_1.get('/login')
    ], LoginController.prototype, "getLogin", null);
    __decorate([
        decoretors_1.get('/logout')
    ], LoginController.prototype, "getLogout", null);
    __decorate([
        decoretors_1.post('/login'),
        decoretors_1.bodyValidator('email', 'password')
    ], LoginController.prototype, "postLogin", null);
    LoginController = __decorate([
        decoretors_1.controller('/auth')
    ], LoginController);
    return LoginController;
}());
