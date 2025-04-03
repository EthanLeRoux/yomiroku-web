import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {app} from "./firebaseapp.js";

const auth = getAuth(app);

export const signInUser = async (email, password) => {
    if (!email || !password) {
        alert("Please enter a valid email and password");
        return null
    }
    else{
        try {
            const signedInUser = await signInWithEmailAndPassword(auth, email, password);
            return signedInUser.user;
        }
        catch(err) {
            alert(err.message);
            console.error(err);
        }
    }

}