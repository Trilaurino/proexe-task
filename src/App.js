import React from "react";
import { Users } from "./features/users/Users";
import { OptionsModal } from "./features/modal/Modal";
import { StatusAlert } from "./features/alert/Alert";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <OptionsModal />
      <StatusAlert />
      <Users />
    </div>
  );
}

export default App;
