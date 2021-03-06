var React = require('react');
var ActionBox = require('./action.box.jsx')

var actions = {
  "DEMO": {
    name: "Code freeze",
    deltas: {
      "PERCENT_COMPLETE": {delta: -5 },
      "MORALE":           {delta: -25 },
      "TECH_DEBT":        {delta: 0 },
      "MANAGEMENT":       {delta: 50 },
      "SPEND_RATE":       {delta: 0 }
    },
    quotes: [
      "Entering Milestone Quality (MQ) phase!",
      "Master branch has been locked!",
      "Waiting for full test pass..."
    ]
  },
  "REWRITE": {
    name: "Dump codebase",
    deltas: {
      "PERCENT_COMPLETE": {delta: -100 },
      "MORALE":           {delta: 10 },
      "TECH_DEBT":        {delta: -100 },
      "MANAGEMENT":       {delta: 100 },
      "SPEND_RATE":       {delta: 100 }
    },
    quotes: [
      "New tech stack will solve all our previous problems!",
      "An empty git repo has been force-pushed to HEAD!"
    ]
  }
};

var ActionList = React.createClass({
  render: function() {
      var parent = this;
      var actionBoxes = Object.keys(actions).map(function (id) {
        return (
          <ActionBox action={actions[id]} game={parent.props.game} />
        );
      });
      return (
        <div className="edt-action-list">
          {actionBoxes}
        </div>
      );
    }
});

module.exports = ActionList