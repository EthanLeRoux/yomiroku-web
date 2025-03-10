import {getAuth, updateEmail, updatePassword} from "firebase/auth";
import {app} from "./firebaseapp.js";

const auth = getAuth(app);

export const updateUserPassword = async (password) => {
    if (!password) {
        alert("Please enter a valid email address and password");
        return null;
    }
    else{
        try {
            await updatePassword(auth.currentUser,password);
            alert('Password updated successfully.');
        }
        catch(err){
            alert(err.message);
            console.error(err);
        }
    }
};

export const updateUserEmail = async (email) => {
    if (!email) {
        alert("Please enter a valid email address");
        return null;
    }
    else{
        try {
            await updateEmail(auth.currentUser,email);
            alert('Email updated successfully.');
        }
        catch(err){
            alert(err.message);
            console.error(err);
        }
    }
};