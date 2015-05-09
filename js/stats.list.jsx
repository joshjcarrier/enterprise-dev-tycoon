var React = require('react')
var StatsBox = require('./stats.box.jsx')

var StatsList = React.createClass({
  getInitialState: function() {
    return {ticks: 0};
  },
  onTick: function() {
    this.setState({ticks: this.state.ticks + 0.1});
  },
  componentDidMount: function() {
    this.props.game.addTickListener(this);
  },
  componentWillUnmount: function() {
    this.props.game.removeTickListener(this);
  },
  render: function() {
      var state = this.state;
      var statsNodes = this.props.game.statistics.map(function (stat) {
        return (
          <StatsBox name={stat.name} progress={stat.progress + state.ticks} />
        );
      });
      return (
        <div className="statsList">
          {statsNodes}
        </div>
      );
    }
});

module.exports = StatsList