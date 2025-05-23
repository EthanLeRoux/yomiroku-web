import {useState} from "react";
import {signInUser} from "../firebase/login.js";
import {Link, useNavigate} from "react-router-dom";

export default function Login(){
    const[userEmail, setUserEmail] = useState("");
    const[userPassword, setUserPassword] = useState("");
    const navigate = useNavigate();

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
        const signedInUser = await signInUser(userEmail, userPassword);
        sessionStorage.setItem('userid',signedInUser.uid);
        sessionStorage.setItem('email',signedInUser.email);
        sessionStorage.setItem('username',signedInUser.username);
        alert("Login successfully");
        setUserEmail("");
        setUserPassword("");
        navigate("/login");
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
                <input type={'submit'} value={"Login"} className={"task_addbutton"}/>
            </form>
            <br/>
            <Link to={'/signup'}>No Account? Click here to sign up</Link>

        </>
    )
}