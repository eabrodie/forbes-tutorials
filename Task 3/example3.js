var github = require('github-basic');
var client = github({version: 3});

client.get('/users/:user/repos', {user: 'forbeslindesay'}).done(function (res) {
  console.log('first page:');
  console.dir(res);
  res.getNext().done(function (res) {
    console.log('second page:');
    console.dir(res);
  }, function (err) {
    console.error('Something went wrong');
    console.error(err.stack);
  });
}, function (err) {
  console.error('Something went wrong');
  console.error(err.stack);
});