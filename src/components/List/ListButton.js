import React from 'react';
import faker from 'faker';

const ListButton = ({ onClick }) => (
  <div
    className="list_button"
    onClick={() =>
      onClick({
        id: faker.random.uuid(),
        title: faker.name.findName()
      })
    }
  >
    Add Item
  </div>
);

export default ListButton;