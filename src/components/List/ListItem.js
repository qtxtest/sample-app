import React from 'react';

const ListItem = ({ item, onClick }) => (
  <div className="list_item" onClick={onClick}>
    {item.title}
  </div>
);

export default ListItem;