import React, { Component } from 'react';
import ListItem from './list-item';

class List extends Component {
  constructor() {
    super();
    this.state = {
      items: [{ name: 'Test item', done: false }],
      inputValue: ''
    };
  }

  removeItem = item => {
    return () =>
      this.setState({ items: this.state.items.filter(i => i !== item) });
  };

  checkItem = item => {
    return () => {
      console.log('check', item);
      this.setState({
        items: this.state.items.map(i =>
          i === item ? { ...item, done: !item.done } : i
        )
      });
    };
  };

  render() {
    const { items } = this.state;
    return (
      <ul>
        {items.map((item, index) => (
          <ListItem
            key={`list-item-${index}`}
            item={item}
            removeItem={this.removeItem(item)}
            checkItem={this.checkItem(item)}
          >
            {item.name}
          </ListItem>
        ))}
      </ul>
    );
  }
}

export default List;
