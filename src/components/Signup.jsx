import {useState} from "react";
import {createNewUser} from "../firebase/signup.js";
import {Link} from "react-router-dom";

export default function Signup(){
    const[userEmail, setUserEmail] = useState("");
    const[userPassword, setUserPassword] = useState("");

    const handleEmailChange = (e) => {
        setUserEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setUserPassword(e.target.value);
    }

    const handleFormSubmit = async (event)=>{
        event.preventDefault();
        if(userPassword.length<6){
            alert("Password must be at least 6 characters");
        }
        await createNewUser(userEmail, userPassword);
        setUserEmail("");
        setUserPassword("");

    };


    return(
        <>
            <form onSubmit={handleFormSubmit} className={'formArea'}>
                <p>
                    <input type={"email"} onChange={handleEmailChange} value={userEmail} placeholder="Email" required={true} className={'inputText'}/>
                </p>
                <p>
                    <input type={"password"} onChange={handlePasswordChange} value={userPassword} placeholder="Password" required={true} className={'inputText'}/>
                </p>
                <input type={'submit'} value={"Sign Up"} className={"task_addbutton"}/>
            </form>
            <br/>
            <Link to={'/login'}>Already have account? Click here to login</Link>
        </>
    )
}