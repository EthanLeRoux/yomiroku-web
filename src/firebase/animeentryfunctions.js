import {db} from '/src/firebase/firebaseapp.js';
import {collection, addDoc, getDocs,query,where} from 'firebase/firestore';

export const addAnimeEntry = async (task) => {
    try {
        const documentReference = await addDoc(collection(db, 'anime_entry'), {
            title: task.title,
            url: task.url,
            episodeCount: task.episodeCount,
            targetLanguage: task.targetLanguage,
            entryDate: task.entryDate,
            modifiedDate: Date.now(),
            userid:sessionStorage.getItem("userid")
        });

        console.log("New anime entry added. ID: " + documentReference.id);
    }
    catch (error) {
        console.error(error);
    }
};

export const getAnimeEntriesByUser = async (uuid) => {
    try {
        const q = query(collection(db, 'anime_entry'), where('userid', '==', uuid));
        const querySnapshot = await getDocs(q);

        const entries = [];
        querySnapshot.forEach((doc) => {
            entries.push({ id: doc.id, ...doc.data() });
        });

        return entries;
    } catch (error) {
        console.error("Error getting anime entries by UUID:", error);
        return [];
    }
};