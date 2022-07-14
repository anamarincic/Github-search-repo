import './App.css';
import {SearchUserPage} from "./Page/SearchUserPage";
import {UserInfoPage} from "./Page/UserInfoPage";
import {useState} from "react";


function App() {
  const [user, setUser] = useState(null);

  const storedSearch = (user) => {
    setUser(user);
  }

  const clearSearch = () => {
    setUser(null);
  }
  

  const isSearch = user !== null;

  return (
    <div>
      {isSearch && <UserInfoPage reset={clearSearch} user={user}/>}
      {!isSearch && <SearchUserPage search={storedSearch} />}
    </div>
  );
}

export default App;

