var React = require('react')
var StatsBox = require('./stats.box.jsx')

var StatsList = React.createClass({
  handleDecrementClick: function() {
    this.props.game.decrementDemo();
  },
  render: function() {
      var parent = this;
      var statsNodes = Object.keys(this.props.game.statistics).map(function (id) {
        return (
          <StatsBox id={id} game={parent.props.game} />
        );
      });
      return (
        <div className="edt-stats-list">
          {statsNodes}
          <button onClick={this.handleDecrementClick}>-</button>
        </div>
      );
    }
});

module.exports = StatsList