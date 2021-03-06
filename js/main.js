// WARNING! THIS FILE AUTOGENERATED FROM js/main.js

var React = require('react');
var Employee = require('./employee.jsx');
var StatsList = require('./stats.list.jsx');
var ActionList = require('./action.list.jsx');

var FbIntegration = require('./fbIntegration.js');

var Game = require('./game.js');
var game = new Game();
game.start();

React.render(
	<StatsList game={game}/>,
	document.getElementById('edt-stats-list--container')
);

React.render(
  <ActionList game={game}/>,
  document.getElementById('edt-action-list--container')
);

React.render(
	<Employee/>, 
	document.getElementById('edt-employee--container')
);
