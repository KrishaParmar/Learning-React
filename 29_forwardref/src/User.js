import './App.css';
import { forwardRef } from 'react';
function User(props,ref){
    return(
        <div className="App">
          <h1>User Component</h1>
          <input type="text" ref={ref}/>
      </div>
    )
}
export default forwardRef(User);