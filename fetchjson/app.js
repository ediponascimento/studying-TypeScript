"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var urlAPI = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(urlAPI).then(function (response) {
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    console.log("\n    The todo with id " + id + "\n    Has a title of: " + title + "\n    Is it finished? " + completed + "\n  ");
});
