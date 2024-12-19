export function Student(props){
    console.log(props)
    return(
        <div style={{backgroundColor:"skyblue", margin:10}}>
            {/* <h1>hello {props.name}</h1>
            <h1>Email: {props.email}</h1>
            <h1>Address: {props.other.address}</h1> */}
            <h1>hello {props.name}</h1>

        </div>
        
    )
}