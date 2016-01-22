import React from 'react';
import Firebase from 'firebase';
import ReactFireMixin from 'reactfire';

var App = React.createClass({
  mixins: [ReactFireMixin],
  render: function () {
    return (
      <div>
        <label>
          <input type="text" placeholder="Add Item" onKeyUp={this.addItem} />
        </label>
        <ul>
          {this.state.items.map((item) => {
            return <li key={item['.key']}>{item['.value']} - <span onClick={this.removeItem.bind(this, item['.key'])}>X</span></li>;
          })}
        </ul>
      </div>
    );
  },
  componentWillMount: function() {
    var ref = new Firebase("https://jehoshua02-qs.firebaseio.com/items");
    this.bindAsArray(ref, "items");
  },
  addItem: function (e) {
    if (e.key.toLowerCase() === 'enter') {
      this.firebaseRefs.items.push(e.target.value);
      e.target.value = '';
    }
  },
  removeItem: function (key) {
    this.firebaseRefs.items.child(key).remove();
  }
});

export default App;
