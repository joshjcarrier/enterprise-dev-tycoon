var React = require('react')

var StatsBox = React.createClass({
  getInitialState: function() {
    return {stat: this.props.game.statistics[this.props.id]};
  },
  update: function() {
    this.setState({stat: this.props.game.statistics[this.props.id]});
  },
  componentDidMount: function() {
    this.props.game.addUpdateListener(this);
  },
  componentWillUnmount: function() {
    this.props.game.removeUpdateListener(this);
  },
  render: function() {
    var stat = this.state.stat;
    return (
      <div className="row edt-stats-box">
        <div className="col-xs-4 label label-default">
          {stat.name}
        </div>

        <div className="col-xs-8">
          <div className="progress">
            <div className="progress-bar" 
                 role="progressbar" 
                 aria-valuenow="{stat.value}" 
                 aria-valuemin="0" 
                 aria-valuemax="100" 
                 style={{width: stat.value+"%"}}>
                <span className="sr-only">{stat.value}%</span>
              </div>
            </div>
          </div>
      </div>
    );
  }
});

module.exports = StatsBox