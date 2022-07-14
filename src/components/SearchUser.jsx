import {Button} from "./Button";
import {useState} from "react";

export function SearchUser(props) {
  const [formState, setFormState] = useState({username: ""});
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
       if(formState.username === ""){
         setError(true);
       }else{
         setError(null);
         props.onSubmit(formState);
         console.log(formState);
         setFormState({username: ""});
       }
  }

  const handleChange = (event) => {
    setFormState((state) => ({...state, [event.target.name] : event.target.value}));

  }

  const showErrorMessage = error !== null;

    return (
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-form__field">
          <div className="search-form__field-element">
            <label>GitHub username:</label>
            <input name="username" type="text" onChange={handleChange} placeholder="e.g.facebook"/>
          </div>
        </div>
        <div className="search-form__field">
          <Button type="submit" text="GO!" />
        </div>
        <div className="sign-in-form__error">
        {showErrorMessage && <div className="form-error">Erorr!</div>}
      </div>
      </form>
    )
}