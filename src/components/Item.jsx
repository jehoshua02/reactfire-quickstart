import React from 'react';

var Item = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    update: React.PropTypes.func.isRequired,
    remove: React.PropTypes.func.isRequired
  },
  getInitialState: function () {
    return {
      value: this.props.value
    };
  },
  render: function () {
    var value = this.state.value;
    return (
      <div>
        <input
          type="text"
          value={value}
          onChange={this.change}
          onBlur={this.update}
          onKeyUp={this.keyup}
        />
        <button
          onClick={this.remove}
        >remove</button>
      </div>
    );
  },
  keyup: function (e) {
    if (e.key.toLowerCase() === 'enter') {
      this.props.update(this.props.id, this.state.value);
    }
  },
  change: function (event) {
    this.setState({value: event.target.value});
  },
  update: function () {
    this.props.update(this.props.id, this.state.value);
  },
  remove: function () {
    this.props.remove(this.props.id);
  }
});

export default Item;
