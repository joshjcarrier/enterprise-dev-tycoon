var React = require('react')
var StatsBox = require('./stats.box.jsx')

var StatsList = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
      var state = this.state;
      var statsNodes = this.props.data.map(function (stat) {
        return (
          <StatsBox name={stat.name} progress={stat.progress + state.secondsElapsed} />
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