const Todos = require('../models/todoModel');

module.exports = function(app) {
    app.get('/api/setupTodos', function(req, res) {
        var starterTodos = [
            {
                username: 'test',
                todo: 'Buy milk',
                complete: false
            },
            {
                username: 'test',
                todo: 'Feed dog',
                complete: false
            },
            {
                username: 'test',
                todo: 'Learn Node',
                complete: false
            }
        ];
        Todos.create(starterTodos, function(err, results) {
            res.send(results);
        });
    })
}