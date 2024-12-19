function User1(props){
    return(
        <div>
            <h1>User1 Component</h1>
            <button onClick={props.data}>call the parent component</button>
        </div>
    )
}

export default User1;