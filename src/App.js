import React, { useState } from "react";
import "./App.css";
import { ProfilePage } from "./component";
import { data } from "./constants";
import { Home } from "./component";

export const NetflixContext = React.createContext();

function App() {
  const [selectedUserId, setSelectedUserId] = useState();
  const [users, setUsers] = useState(data.sampleUsers);

  function onHandleUserSelect(id) {
    setSelectedUserId(id);
  }

  const selectedUser = users.find((user) => user.id === selectedUserId);

  const netflixContextValue = {
    onHandleUserSelect,
  };

  return (
    <NetflixContext.Provider value={netflixContextValue}>
      {selectedUser ? <Home selectedUser={selectedUser} /> : <ProfilePage />}
    </NetflixContext.Provider>
  );
}

export default App;
