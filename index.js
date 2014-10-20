var express   = require('express'),
    bookshelf =	require('bookshelf'),
    knex      = require('knex'),
    app       = express();

//database setup
var db_config = knex(require('./knexfile').development);
var bookshelf = bookshelf(db_config);
app.set('bookshelf', bookshelf);

// user model setup
var User = bookshelf.Model.extend({
	tableName: 'users'
});

app.get('/new', function(req, res){
	var user = new User({ email: 'foobar@example.com'});
	user.save().then(function() { res.send(user); });
});

app.get('/', function(req, res) {
	User.fetchAll().then(function(data) { res.send(data); });
});

var server = app.listen(3000, function() {
	console.log('listening on port %d', server.address().port);
});
