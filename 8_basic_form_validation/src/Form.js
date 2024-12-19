import { use, useState } from "react"

export default function Form(){

    const [user,setUser] = useState("");
    const [passoword,setPassword] = useState("");
    // const [userErr,setUserErr] = useState(false)
    // const [passwordErr,setPasswordErr] = useState(false)
    const [msg,setmsg] = useState("")
    
    function usersubmit(e){
        e.preventDefault();
        if(user.length<3){
            setmsg("username must be more then 2 letters")
        }else{
            setmsg(`hello ${user}`)
        }
        if(passoword.length<3){
            setmsg("Password must be more then 2 letters")
        }
        
    }
    function userplace(e){
        // console.log(e.target.value)
        let l = e.target.value;
        // if(l.length<3){
        //     setUserErr(true)
        // }else{
        //     setUserErr(false)
        // }
        setUser(l)
    }
    function passwordplace(e){
        // console.log(e.target.value)
        let l = e.target.value;
        // if(l.length<3){
        //     setPasswordErr(true)
        // }else{
        //     setPasswordErr(false)
        // }
        setPassword(l)
    }
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={usersubmit}>
                <input type="text" placeholder="Enter Your UserName" onChange={userplace} /> <br /><br />
                <input type="password" placeholder="Enter Your Passoword" onChange={passwordplace}/><br /><br />
                <button type="submit">Login</button> <br /><br />
                {/* {userErr? <span>Enter valid username</span>:""}
                {passwordErr? <span>Enter valid password</span>:""} */}
                <span>{msg}</span>
            </form>
        </div>
    )
}

