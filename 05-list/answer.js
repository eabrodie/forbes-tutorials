var React = require('react');
var ReactDOM = require('react-dom');

var container = document.getElementById('container');

var ListOfItems = React.createClass({
  displayName: 'ListOfItems',
  /*
  propTypes: {
    max: React.PropTypes.number.isRequired,
  },
  
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
  },*/

  render: function () {
    var listItems = [];
    for (var i = 0; i < this.props.max; i++) {
      listItems.push(i);
    };
    return React.createElement(    
      'ul',
      {},
      listItems.map(function (item, index) {
        return React.createElement(
          'li',
          {key: index},
          item
        );
      }),
      'form',
      /*{onSubmit: this._onSubmit},*/
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
    );
  }
  });
  
  /*render: function () {
    var listItems = ['blue', 'red'];
    for (var i = 0; i < this.props.max; i++) {
      numbers.push(i);
    }
    return React.createElement(
      'ul',
      {},
      listItems.map(function (item, index) {
        return React.createElement(
          'li',
          {key: index},
          item
        );
      })
    );
  }
});*/

ReactDOM.render(
  React.createElement(ListOfItems, {max: 10}),
  container
);