var mongo = require('then-mongo');
var secrets = require('./secrets');

// the second argument is a list of collection names
// you can call the collections whatever you want and
// use them to separate different types of object
var db = mongo(secrets.MONGO_DB_CONNECTION, ['people']);

db.people.findOne({_id: 'ellie'}).done(function (item) {
  console.dir(item.colour, {depth: 10, colors: true});
  // close the connection to the database
  db.close();
});