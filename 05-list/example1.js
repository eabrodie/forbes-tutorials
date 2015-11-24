var React = require('react');
var ReactDOM = require('react-dom');

var container = document.getElementById('container');

var HelloWorld = React.createClass({
  displayName: 'HelloWorld',

  getInitialState: function () {
    return {
      name: ''
    };
  },

  _onChange: function (e) {
    this.setState({
      name: e.target.value
    });
  },

  _onSubmit: function (e) {
    // by default, the form will be sent to the server
    // but we want to handle it in JavaScript
    e.preventDefault();
    alert('Hello ' + this.state.name);
  },

  render: function () {
    return React.createElement(
      'form',
      {onSubmit: this._onSubmit},
      React.createElement(
        'input',
        {
          value: this.state.name,
          onChange: this._onChange
        }
      ),
      React.createElement(
        'button',
        {type: 'submit'},
        'Say Hello'
      )
    );
  }
});

ReactDOM.render(
  React.createElement(HelloWorld, {}),
  container
);