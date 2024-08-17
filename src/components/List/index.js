import React, { useState } from 'react';
import faker from 'faker';
import List from './List';
import ListButton from './ListButton';

// don't change this !!!
const initList = [];
let times = 5;
while (times-- > 0) {
  initList.push({
    id: faker.random.uuid(),
    title: faker.name.findName(),
  });
}

const App = () => {
  const [list, setList] = useState([]);

  const handleRemove = (index) => {
    setList(list.filter((item, i) => i !== index));
  };

  const handleAdd = (newItem) => {
    setList(list.concat([newItem]));
  };

  return (
    <div className='App'>
      <List items={list} onRemove={handleRemove} />
      <ListButton onClick={handleAdd} />
    </div>
  );
};

export default App;