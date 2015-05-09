var React = require('react')
var StatsBox = require('./stats.box.jsx')

var StatsList = React.createClass({
  handleDecrementClick: function() {
    this.props.game.update({
        name: "demo action",
        deltas: {
        "PERCENT_COMPLETE": {delta: 20 },
        "MORALE":           {delta: -15 },
        "TECH_DEBT":        {delta: -25 },
        "MANAGEMENT":       {delta: 0 },
        "SPEND_RATE":       {delta: 15 }
      }
    });
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