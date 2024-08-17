import React, { useEffect } from "react";
import faker from "faker";
import ListButton from "./ListButton";
import ListItem from "./ListItem";
import useUserStore from "../../store/useUserStore";
// import "./styles.css";

// don't change this !!!
const list = [];
let times = 5;
while (times-- > 0) {
  list.push({
    id: faker.random.uuid(),
    title: faker.name.findName(),
  });
}

const App = () => {
  const { users, addAllUsers, addUser, removeUser } = useUserStore();

  useEffect(() => {
    addAllUsers(list);
  }, [addAllUsers]);

  const renderListItem = (item) => (
    <ListItem key={item.id} item={item} onClick={() => removeUser(item.id)} />
  )

  return (
    <div className="App">
      <div className="list">
        {users.map(renderListItem)}
        <ListButton onClick={addUser} />
      </div>
    </div>
  );
};

export default App;
