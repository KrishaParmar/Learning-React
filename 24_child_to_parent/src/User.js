export default function User(props){
    const data = "krisha parmar"
    return(
        <>
            <h1>User Name: {data}</h1>
            <button onClick ={()=>props.alert(data)} >click me</button>
        </>
    )
}