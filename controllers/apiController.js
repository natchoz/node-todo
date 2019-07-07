const Todos = require('../models/todoModel');
const bodyParser = require('body-parser');

module.exports = function (app) {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	app.get('/api/todos/:username', function (req, res) {
		Todos.find({ username: req.params.username }, function (err, result) {
			if (err) throw err;

			res.send(result);
		});

	});

	app.get('/api/todo/:id', function (req, res) {
		Todos.findById({ _id: req.params.id }, function (err, result) {
			if (err) throw err;

			res.send(result);
		});
	});

	app.post('/api/todo', function (req, res) {
		if (req.body.id) {
			Todos.findByIdAndUpdate(req.body.id, {
				todo: req.body.todo,
				complete: req.body.complete
			}, function (err, result) {
				if (err) throw err;

				res.send('Success');
			});
		}
		else {
			let newTodo = Todos({
				username: 'test',
				todo: req.body.todo,
				complete: req.body.complete
			});

			newTodo.save(function (err) {
				if (err) throw err;

				res.send('Success');
			})
		}
	});

	app.delete('/api/todo', function (req, res) {
		Todos.findByIdAndDelete(req.body.id, function (err, result) {
			if (err) throw err;

			res.send('Success');
		});
	});
}
