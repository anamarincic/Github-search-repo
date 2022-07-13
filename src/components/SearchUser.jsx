import {Button} from "./Button";

export function SearchUser() {

    return (
        <form className="search-form">
      <div className="search-form__field">
        <div className="search-form__field-element">
          <label>GitHub username:</label>
          <input placeholder="e.g.facebook"/>
        </div>
      </div>
      <div className="search-form__field">
        <Button type="button" text="GO!" />
      </div>
    </form>
    )
}