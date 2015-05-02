var React = require('react')

var EmployeeImage = React.createClass({
  render: function() {
      return (
          <img src="https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/v/t1.0-1/10488140_1065868170096695_3898163317204824605_n.jpg?oh=0e3e01d9b3073d28b05be2057ea3f68a&oe=55CC5B9A&__gda__=1440822306_2703ad69eed02c066c8ab6cf73799877" />
          );
  }
});

var Employee = React.createClass({
  render: function(){
      return (
          <EmployeeImage />
          );
  }
});

module.exports = Employee