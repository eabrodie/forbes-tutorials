var React = require('react');
var ReactDOM = require('react-dom');

var container = document.getElementById('container');

var intervalID = window.setInterval(myMain, 1000);


function myMain() {
  var date = (new Date()).toString();

  ReactDOM.render(
    React.createElement(
      'p',
      {},
      'The time is: ',
      React.createElement(
        'b',
        {},
        date
      )
    ),
    container
  );
}