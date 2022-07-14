import {SearchUser} from "../components/SearchUser";

export function SearchUserPage(props){

  const handleSubmit = (formState) => {
       props.search(formState);
  }

    return (
    <div>
      <SearchUser onSubmit={handleSubmit}/>
    </div>
    );
}