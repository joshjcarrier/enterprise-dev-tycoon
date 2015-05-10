var React = require('react')

var ActionBox = React.createClass({
  handleClick: function() {
    this.props.game.update(this.props.action);
  },
  render: function() {
    return (
      <div id="edt-action-box" className="row">
        <div className="col-xs-6">
          <h4>{this.props.action.name}</h4>
        </div>
        <div className="col-xs-4">
          <button className="btn btn-sm btn-danger" 
                  onClick={this.handleClick}>Do it</button>
        </div>
      </div>
    );
  }
});

module.exports = ActionBox