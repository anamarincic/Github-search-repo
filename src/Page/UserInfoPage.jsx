import {User} from "../components/User";
import {useEffect, useState} from "react";

function getUser () {
    return fetch("https://api.github.com/users/facebook")
    .then((response) => {
        return response.json();
    });
}

export function UserInfoPage(){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        getUser().then((data) => { setData(data);}).catch((error) => {setError(error);});
    }, []);

    if (error !== null) {
        return <div>{error.message}</div>;
      }
    
      if (data === null) {
        return <div>Loading...</div>;
      }
  

    return (
        <div>
            <User data={data} />
        </div>
    )
}