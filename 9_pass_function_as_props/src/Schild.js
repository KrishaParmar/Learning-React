function Schild(props){
    return(
        <div>
            <h1>Schild Component</h1>
            <button onClick={props.data}>call the parent component</button>
        </div>
    )
}

export default Schild;