/** @jsx React.DOM */
var Timer = require('./famous/utilities/Timer');
var React = require('react');
var ReactFamous = require('./react-famous');

var Context = ReactFamous.Context;
var StaticScrollview = ReactFamous.StaticScrollview;

/**
var FamousTimerMixin = {
  componentWillMount: function() {
    this._famousTimers = [];
  },

  setInterval: function() {
    this._famousTimers.push(
      Timer.setInterval.apply(Timer, arguments)
    );
  },

  componentWillUnmount: function() {
    this._famousTimers.forEach(Timer.clear.bind(Timer));
  }
}; **/

var size = [200, 200];
var direction = 0;

var App = React.createClass({
  //mixins: [FamousTimerMixin],

  render: function() {
    return (
      <Context>
        <StaticScrollview direction={direction}>
          <div size={size}>Surface 1</div>
          <div size={size}>Surface 2</div>
        </StaticScrollview>
      </Context>
    );
  }
});
React.renderComponent(App(), document.body);


//Timer.setTimeout(function() {
//  React.renderComponent(<h1>PEACE</h1>, document.body);
//}, 5000);
