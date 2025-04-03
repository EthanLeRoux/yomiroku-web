import {useState} from "react";
import '/src/assets/css/anime-entry.css';

export default function AddNewAnimeEntry() {
    const[animeTitle, setAnimeTitle] = useState('');
    const[animeUrl, setAnimeUrl] = useState('');
    const[animeEpisodeCount, setAnimeEpisodeCount] = useState(0);
    const[entryDate, setEntryDate] = useState('');
    const[targetLanguage, setTargetLanguage] = useState('');
    const[modifiedDate, setModifiedDate] = useState('');

    const handleEntrySubmit = (e)=>{
        e.preventDefault();
    }

    return (
        <>
            <h2>New Anime Entry</h2>
            <div className="anime-entry-container">
                <form onSubmit={handleEntrySubmit} className="anime-entry-form">
                    <label>Title</label>
                    <label>URL</label>
                    <label>Episode Count</label>
                    <label>Date</label>
                    <label>Target Language</label>
                    <label>     </label>
                    <p className={"anime-entry-item"}>
                        <input type={"text"} value={animeTitle} className={"anime-entry-input"}/>
                    </p>
                    <p className={"anime-entry-item"}>
                        <input type={"text"} value={animeUrl} className={"anime-entry-input"}/>
                    </p>
                    <p className={"anime-entry-item"}>
                        <input type={"number"} value={animeEpisodeCount} className={"anime-entry-input"}/>
                    </p>
                    <p className={"anime-entry-item"}>
                        <input type={"text"} value={entryDate} className={"anime-entry-input"}/>
                    </p>
                    <p className={"anime-entry-item"}>
                        <input type={"text"} value={targetLanguage} className={"anime-entry-input"} />
                    </p>

                    <input type={"submit"} value={'Add Entry'} className={"anime-entry-submit"}/>
                </form>


            </div>
        </>
    )
}