var React = require('react');
var ReactDOM = require('react-dom');

var container = document.getElementById('container');

var HelloWorld = React.createClass({
  displayName: 'HelloWorld',

  getInitialState: function () {
    return {
      name: '',
      numbers: []
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
    this.setState({
      numbers: this.state.numbers.concat(this.state.name),
      name: ''
    })
  },
  
  _onSortAZ: function (e) {
    // by default, the form will be sent to the server
    // but we want to handle it in JavaScript
    //e.preventDefault();
    this.setState({
      numbers: this.state.numbers.sort()
    })
  },
  
  _onSortZA: function (e) {
    // by default, the form will be sent to the server
    // but we want to handle it in JavaScript
    //e.preventDefault();
    this.setState({
      numbers: this.state.numbers.sort().reverse()
    })
  },

  render: function () {
    return React.createElement(
      'div',
      {},
      React.createElement(
      'form',
      {onSubmit: this._onSubmit},
      React.createElement(
        'ul',
        {},
        this.state.numbers.map(function (number, index) {
          return React.createElement(
            'li',
            {key: index},
            number
          );
        })
      ),
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
        'Add'
      )
      ),
        React.createElement(
        'button',
        {onClick: this._onSortAZ},
        'A-Z'
      ),
      React.createElement(
        'button',
        {onClick: this._onSortZA},
        'Z-A'
      )
    );
  }
});

ReactDOM.render(
  React.createElement(HelloWorld, {}),
  container
);