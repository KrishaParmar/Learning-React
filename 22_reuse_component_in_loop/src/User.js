function User(props){
    return(
        <div>
            
        
            <div>
                <span>{props.data.name}</span><span>{props.data.email}</span><span>{props.data.phoneno}</span>
            </div>
        
        </div>
    )
}
export default User;