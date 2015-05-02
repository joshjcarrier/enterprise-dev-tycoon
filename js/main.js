// WARNING! THIS FILE AUTOGENERATED FROM js/main.js

var React = require('react')
var Employee = require('./employee.jsx')
var StatsList = require('./stats.list.jsx')


var data_stats = [
  {name: "% Complete", progress: 0 },
  {name: "Morale", progress: 0 },
  {name: "Technical Debt", progress: 0 },
  {name: "Management", progress: 0 },
  {name: "Spend Rate", progress: 0 }
];

React.render(
	<StatsList data={data_stats}/>,
	document.getElementById('content-stats')
);

React.render(
	<Employee/>, 
	document.getElementById('employee')
);
