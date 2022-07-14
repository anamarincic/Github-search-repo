import {User} from "../components/User";
import {Button} from "../components/Button";
import {useState, useEffect} from "react";

export function UserInfoPage(props){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    var users= props.user.username;

  useEffect(() => {
      (function() {
          return fetch(`https://api.github.com/users/${users}`)
          .then((response) => {
              return response.json();
          });
      })().then((data) => { setData(data);}).catch((error) => {setError(error);});
  }, [users]);

  if (error !== null) {
      return <div>{error.message}</div>;
    }
  
    if (data === null) {
      return <div>Loading...</div>;
    }
   
  

    return (
        <div>
            <User data={data} />
            <Button onClick={props.reset} type="button" text="reset" />
        </div>
    )
}