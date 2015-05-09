var React = require('react')

var StatsBox = React.createClass({
  getInitialState: function() {
    return {ticks: 0};
  },
  update: function() {
    this.setState({ticks: this.state.ticks + 0.1});
  },
  componentDidMount: function() {
    this.props.game.addUpdateListener(this);
  },
  componentWillUnmount: function() {
    this.props.game.removeUpdateListener(this);
  },
  render: function() {
    var state = this.state;
    return (
      <div className="row edt-stats-box">
        <div className="col-md-4 label label-default">
          {this.props.name}
        </div>

        <div className="col-md-8">
          <div className="progress">
            <div className="progress-bar" 
                 role="progressbar" 
                 aria-valuenow="{state.ticks}" 
                 aria-valuemin="0" 
                 aria-valuemax="100" 
                 style={{width: state.ticks+"%"}}>
                <span className="sr-only">{state.ticks}%</span>
              </div>
            </div>
          </div>
      </div>
    );
  }
});

module.exports = StatsBox