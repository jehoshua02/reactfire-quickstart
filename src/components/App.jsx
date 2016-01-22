import React from 'react';
import Firebase from 'firebase';
import ReactFireMixin from 'reactfire';

var App = React.createClass({
  mixins: [ReactFireMixin],
  render: function () {
    return (<h1>Hello</h1>);
  },
  componentWillMount: function() {
    var ref = new Firebase("https://jehoshua02-qs.firebaseio.com/items");
    this.bindAsArray(ref, "items");
  }
});

export default App;
