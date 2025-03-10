import {getAuth, signOut} from "firebase/auth";
import {app} from "firebaseapp.js";

const auth = getAuth(app);

export const signOutUser = async ()=>{
    try{
        await signOut(auth);
        alert("Sign out successful");
    }
    catch(err){
        alert(err.message);
        console.error(err);
    }
}