import React from 'react';

class User extends React.Component{
    constructor(){
        super();
        this.state={
            email:"krisha@gmail.com"
        }
    }
    render(){
        console.log("render");
        
        return(
            <div>
                <h1>User Component</h1>
                {/* <h1>{this.props.name}</h1>
                 */}
                <button onClick={()=>this.setState({email:"parmar@gmail.com"})}>change email</button>
                <h1>{this.state.email}</h1>
            </div>
        )
    }
}

export default User;