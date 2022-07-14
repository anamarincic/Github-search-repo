import {SearchUser} from "../components/SearchUser";
import {useState} from "react";

export function SearchUserPage(props){
  const[user, setUser] = useState(null);

  const handleSubmit = (formState) => {
       setUser(formState);
       props.search(user);
  }

    return (
    <div>
      <SearchUser onSubmit={handleSubmit}/>
    </div>
    );
}