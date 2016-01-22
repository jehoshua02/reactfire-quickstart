import React from 'react';
import Firebase from 'firebase';
import ReactFireMixin from 'reactfire';

var App = React.createClass({
  mixins: [ReactFireMixin],
  render: function () {
    return (
      <ul>
        {this.state.items.map((item) => {
          return <li key={item['.key']}>{item['.value']}</li>;
        })}
      </ul>
    );
  },
  componentWillMount: function() {
    var ref = new Firebase("https://jehoshua02-qs.firebaseio.com/items");
    ref.push(Math.random());
    ref.push(Math.random());
    ref.push(Math.random());
    ref.push(Math.random());
    this.bindAsArray(ref, "items");
  }
});

export default App;
