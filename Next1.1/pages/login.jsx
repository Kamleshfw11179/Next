import { useState } from "react"
import styles from "../styles.module.css"
export default function Login(){
    const [user,setUser] = useState({
        name:"",
        email:"",
        password:""
    });
     

    function handleChange(e){
        let name = e.target.name;
        let val = e.target.value;
        setUser({...user,[name]:val})
    }
    return(
        <div className={styles.login}>
        <h1>Login</h1>
            <label>Name</label>
            <br/>
            <input type="text" name ="name" value = {user.name} placeholder="name" onChange={handleChange}></input>
            <br/>
            <label>Email</label>
            <br/>
            <input type="text" name ="email" value = {user.email} placeholder="email" onChange={handleChange}></input>
            <br/>
            <label>Password</label>
            <br/>
            <input type="text" name ="password" value = {user.password} placeholder="password" onChange={handleChange}></input>
            <br/>
            <br/>
            <button>Login</button>
        </div>
    )
}