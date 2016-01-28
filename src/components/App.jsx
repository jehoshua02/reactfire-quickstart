import React from 'react';
import Firebase from 'firebase';
import ReactFireMixin from 'reactfire';
import Item from './Item';

var App = React.createClass({
  mixins: [ReactFireMixin],
  render: function () {
    return (
      <div>
        <label>
          <input type="text" placeholder="Add Item" onKeyUp={this.add} />
        </label>
        <div>
          {this.state.items.map((item) => {
            return (
              <Item
                id={item['.key']}
                value={item['.value']}
                update={this.update}
                remove={this.remove}
                key={item['.key']}
              />
            );
          })}
        </div>
      </div>
    );
  },
  componentWillMount: function() {
    var ref = new Firebase("https://jehoshua02-qs.firebaseio.com/items");
    this.bindAsArray(ref, "items");
  },
  add: function (e) {
    if (e.key.toLowerCase() === 'enter') {
      this.firebaseRefs.items.push(e.target.value);
      e.target.value = '';
    }
  },
  update: function (id, value) {
    this.firebaseRefs.items.child(id).set(value);
  },
  remove: function (id) {
    this.firebaseRefs.items.child(id).remove();
  }
});

export default App;
