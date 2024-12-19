import Schild from "./Schild";
function User(props){
    return(
        <div>
            <h1>User Component</h1>
            <button onClick={props.data}>call the parent component</button>
            <Schild data={props.data}/>
        </div>
    )
}

export default User;