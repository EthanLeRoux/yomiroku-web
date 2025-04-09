import {db} from '/src/firebase/firebaseapp.js';
import {collection, addDoc, getDocs} from 'firebase/firestore';

export const addAnimeEntry = async (task) => {
    try {
        const documentReference = await addDoc(collection(db, 'anime_entry'), {
            title: task.title,
            url: task.url,
            episodeCount: task.episodeCount,
            targetLanguage: task.targetLanguage,
            entryDate: task.entryDate,
            modifiedDate: Date.now()
        });

        console.log("New anime entry added. ID: " + documentReference.id);
    }
    catch (error) {
        console.error(error);
    }
};