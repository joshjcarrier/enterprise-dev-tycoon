var React = require('react')

var StatsBox = React.createClass({
  render: function() {
    return (
      <div className="row edt-stats-box">
        <div className="col-md-4 label label-default">
          {this.props.name}
        </div>

        <div className="col-md-8">
          <div className="progress">
            <div className="progress-bar" role="progressbar" aria-valuenow="{this.props.progress}" aria-valuemin="0" aria-valuemax="100" style={{width: this.props.progress+"%"}}>
                <span className="sr-only">{this.props.progress}% Complete</span>
              </div>
            </div>
          </div>
      </div>
    );
  }
});

module.exports = StatsBox