import {useState, useEffect} from "react";
import {Repo} from "./Repo";

export function User (props) {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    var users= props.data.name;

  useEffect(() => {
      (function() {
          return fetch(`https://api.github.com/users/${users}/repos`)
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

    console.log(data[0]);

    const repoList = data.map((repo) => (
        <Repo key={repo.id} name={repo.name}/>
    ));


    return (
        <div>
            <img src={props.data.avatar_url}></img>
            <h3>Name: {props.data.name}</h3>
            <h3>Bio: {props.data.bio}</h3>
            <h3>Location: {props.data.location}</h3>
            <h3>Repositories</h3>
            {repoList}
        </div>
    );
}