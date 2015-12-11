var React = require('react');
var ReactDOM = require('react-dom');
var request = require('then-request');

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
    request('PUT', '/items/create', {
        json: {item: this.state.name}
      }).getBody('utf8').then(JSON.parse).done(
        function (items) {
          this.setState({
            name: '',
            numbers: items
          });
        }.bind(this),
        function (err) {
          console.log(err);
        }
      );  
  },
  
  _onSortAZ: function (e) {
    e.preventDefault();
    this.setState({
      numbers: this.state.numbers.sort()
    })
  },
  
  _onSortZA: function (e) {
    e.preventDefault();
    this.setState({
      numbers: this.state.numbers.sort().reverse()
    })
  },
  
  _onRefresh: function (e) {
    e.preventDefault();
    request('GET', '/items').getBody('utf8').then(JSON.parse).done(
      function (items) {
        this.setState({
          numbers: items
        });
      }.bind(this),
      function (err) {
        console.log(err);
      }
    );
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
        'Add another item'
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
      ),
      React.createElement(
        'button',
        {onClick: this._onRefresh},
        'Refresh'
      )
    );
  },
  
  componentDidMount: function() {
    request('GET', '/items').getBody('utf8').then(JSON.parse).done(
      function (items) {
        this.setState({
          numbers: items
        });
      }.bind(this),
      function (err) {
        console.log(err);
      }
    );
    
    this._interval = setInterval(function(){ 
      // note that because we're calling `this.setState`,
      // the function must be "bound"
      request('GET', '/items').getBody('utf8').then(JSON.parse).done(
      function (items) {
        this.setState({
          numbers: items
        });
      }.bind(this),
      function (err) {
        console.log(err);
      }
    );
    }.bind(this), 5000);
  },
  
  componentWillUnmount: function () {
    clearInterval(this._interval);
  },
});

ReactDOM.render(
  React.createElement(HelloWorld, {}),
  container
);