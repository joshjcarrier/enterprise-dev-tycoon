var React = require('react')
var StatsBox = require('./stats.box.jsx')

var StatsList = React.createClass({
  render: function() {
      var parent = this;
      var statsNodes = this.props.game.statistics.map(function (stat) {
        return (
          <StatsBox name={stat.name} game={parent.props.game} />
        );
      });
      return (
        <div className="edt-stats-list">
          {statsNodes}
        </div>
      );
    }
});

module.exports = StatsList