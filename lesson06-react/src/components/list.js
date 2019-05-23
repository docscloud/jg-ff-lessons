import React, { Component } from 'react';
import ListItem from './list-item';

class List extends Component {
  constructor() {
    super();
    this.state = { items: [{ name: 'Test item' }], inputValue: '' };
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem(item) {
    return () =>
      this.setState({ items: this.state.items.filter(i => i !== item) });
  }

  render() {
    const { items } = this.state;
    return (
      <ul>
        {items.map((item, index) => (
          <ListItem
            key={`list-item-${index}`}
            item={item}
            removeItem={this.removeItem(item)}
          >
            {item.name}
          </ListItem>
        ))}
      </ul>
    );
  }
}

export default List;
