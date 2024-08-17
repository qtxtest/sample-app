import React from 'react';
import ListItem from './ListItem';

const List = ({ items, onRemove }) => (
  <div className="list">
    {items.map((item, i) => (
      <ListItem key={i} item={item} onClick={() => onRemove(i)} />
    ))}
  </div>
);

export default List;