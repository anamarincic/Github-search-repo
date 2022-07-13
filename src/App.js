import './App.css';
import {SearchUserPage} from "./Page/SearchUserPage";
import {UserInfoPage} from "./Page/UserInfoPage";
import {useState} from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <UserInfoPage value={user}/>
      <SearchUserPage />
    </div>
  );
}

export default App;

