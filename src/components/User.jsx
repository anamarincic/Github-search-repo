export function User (props) {
    return (
        <div>
            <img src={props.data.avatar_url}></img>
            <h3>Name: {props.data.name}</h3>
            <h3>Bio: {props.data.bio}</h3>
            <h3>Location: {props.data.location}</h3>
            <h3>Repositories</h3>
        </div>
    );
}