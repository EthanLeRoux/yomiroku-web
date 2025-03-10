import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {app} from "./firebaseapp.js";

const auth = getAuth(app);

export const createNewUser = async (email, password) => {
    if (!email || !password) {
        alert("Please enter a valid email and password");
        return null;
    }
    else{
        try {
            const newUser = await createUserWithEmailAndPassword(auth, email, password);
            alert("Sign up successful");
            return newUser.user;
        }
        catch (error) {
            alert(error.message);
            console.error(error);
        }
    }
}