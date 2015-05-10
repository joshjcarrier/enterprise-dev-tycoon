var React = require('react')

var ActionBox = React.createClass({
  getInitialState: function() {
    return {quote:""};
  },
  handleClick: function() {
    this.props.game.update(this.props.action);
    quotes = this.props.action.quotes;
    this.setState({quote: quotes[Math.floor((Math.random() * quotes.length))]});
  },
  render: function() {
    return (
      <div id="edt-action-box" className="row">
        <div className="row">
          <div className="col-xs-6">
            <h4>{this.props.action.name}</h4>
          </div>
          <div className="col-xs-4">
            <button className="btn btn-sm btn-danger" 
                    onClick={this.handleClick}>Do it</button>
          </div>
        </div>
        <div className="row">
          <div className="alert alert-warning" role="alert">
            {this.state.quote}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ActionBox