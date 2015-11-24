var React = require('react');
var ReactDOM = require('react-dom');

var container = document.getElementById('container');

var Clock = React.createClass({
  displayName: 'Clock',

  getInitialState: function () {
    return {
      date: new Date().toString()
    };
  },

  // componentDidMount is called when the component has been added to the DOM
  //
  // Use it to initialise anything that's needed for the lifetime of the
  // element
  componentDidMount: function () {
    this._interval = setInterval(function(){ 
      // note that because we're calling `this.setState`,
      // the function must be "bound"
      this.setState({
        date: new Date().toString()
      });
    }.bind(this), 1000);
  },

  // componetWillMount is called when the component is about to be removed
  // from the DOM.
  //
  // It is important to dispose of anything that was created in
  // `componentDidMount`
  componentWillUnmount: function () {
    clearInterval(this._interval);
  },
  render: function () {
    return React.createElement(
      'p',
      {},
      this.state.date
    );
  }
});


ReactDOM.render(
  React.createElement(Clock, {}),
  container
);