var React = require('react')
var StatsBox = require('./stats.box.jsx')

var StatsList = React.createClass({
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
        </div>
      );
    }
});

module.exports = StatsList