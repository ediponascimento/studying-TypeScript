"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
router.get('/login', function (req, res) {
    res.send("\n  \n    <form method=\"POST\">\n      <div>\n        <label>Email</label>\n        <input type=\"email\" name=\"email\" placeholder=\"e-mail\"/>\n      </div>\n      <div>\n        <label>Password</label>\n        <input type=\"password\" name=\"password\" placeholder=\"password\"/>\n      </div>\n      <button type=\"submit\">Login</button>\n    </form>\n  ");
});
router.post('/login', function (req, res) {
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
});
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n      <div>\n        <div>You are logged in</div>\n        <a href=\"/logout\">Logout</a>\n      </div>\n    ");
    }
    else {
        res.send("\n      <div>\n        <div>You are not logged in</div>\n        <a href=\"/Login\">Login</a>\n      </div>\n    ");
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
