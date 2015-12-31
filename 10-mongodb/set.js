var mongo = require('then-mongo');
var secrets = require('./secrets');

// the second argument is a list of collection names
// you can call the collections whatever you want and
// use them to separate different types of object
var db = mongo(secrets.MONGO_DB_CONNECTION, ['people']);
var userArg = process.argv[2];


// db.update(query, operation, options)
db.people.update(
  // find the item with "id" "ellie"
  {
    _id: 'ellie'
  },
  // set to user entered string
  {
    $set: { 'colour': userArg}
  },
  // if the item doesn't already exist, create it
  {
    upsert: true
  }
).done(function (){
  db.close();
});
