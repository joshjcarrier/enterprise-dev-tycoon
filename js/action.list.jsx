var React = require('react');

var ActionList = React.createClass({
  handleClick: function() {
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
      return (
        <div className="edt-action-list">
          <button onClick={this.handleClick}>-</button>
        </div>
      );
    }
});

module.exports = ActionList