import React, { useState } from "react";
import "./LoginPage.css";
const  LoginPage =() => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handle =(event) =>{
        event.preventDefault();
    const passwordRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    if(email.trim() !== "" && passwordRegex.test(password)){
        setMessage('login sucsessfull');
        alert('login succesffull');
        localStorage.setItem('email', email);
        localStorage.setItem('password',password);
    }else{
        setMessage("sorry login faile");
        alert("sorry login failed");
    }
};
return(
    
    <div className="element">
        <h1 className="login">Login <span>Page</span></h1>
        <form onSubmit={handle} className="form">
            <label for="name" className="mail">Email</label>
            
            <input type="text" 
            value={email} 
            onChange={(event)=>setEmail(event.target.value) }
            placeholder="example@gmail.com"
            required />
            <label for ="name" className="pass">Password</label>
            <input type ="password" 
            value={password} 
            onChange={(event)=> setPassword(event.target.value)}
            placeholder="**********"
            required/>
            <button type="submit" className="button">Login</button>
            {/*<input type="checkbox" className="check">Keep me Logged In</input>*/}
        </form>
        {message && <p>{message}</p>}
    </div>
);
}
export default LoginPage;