import {getAuth, deleteUser} from "firebase/auth";
import {app} from "./firebaseapp.js";

const auth = getAuth(app);

export const deleteCurrentUser = async (user) => {
    user = auth.currentUser;
    if(!user){
        alert("You are not logged in!");
        return false;
    }
    else{
        try{
            await deleteUser(user);
            return true
        }
        catch(err){
            alert(err.message);
            console.error(err);
        }

    }
}