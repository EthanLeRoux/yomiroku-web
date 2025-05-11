import {useState} from "react";
import '/src/assets/css/anime-entry.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {addAnimeEntry} from '/src/firebase/animeentryfunctions.js'

export default function AddNewAnimeEntry() {
    const[animeTitle, setAnimeTitle] = useState('');
    const[animeUrl, setAnimeUrl] = useState('');
    const[animeEpisodeCount, setAnimeEpisodeCount] = useState(0);
    const[targetLanguage, setTargetLanguage] = useState('');
    const[modifiedDate, setModifiedDate] = useState('');
    const [startDate, setStartDate] = useState(new Date());

    const handleOnChangeAnimeTitle = (e)=>{
        setAnimeTitle(e.target.value);
    }

    const handleOnChangeAnimeUrl = (e)=>{
        setAnimeUrl(e.target.value);
    }

    const handleOnChangeTargetLanguage = (e)=>{
        setTargetLanguage(e.target.value);
    }

    const handleOnChangeEpisodeCount = (e)=>{
        setAnimeEpisodeCount(e.target.value)
    }
    const handleEntrySubmit = async (e)=>{
        e.preventDefault();

        const newEntry = {
            title: animeTitle,
            url: animeUrl,
            episodeCount: animeEpisodeCount,
            targetLanguage: targetLanguage,
            entryDate: startDate,
            modifiedDate: Date.now()
        }
        await addAnimeEntry(newEntry);
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
                        <input type={"text"} className={"anime-entry-input"} onChange={handleOnChangeAnimeTitle}/>
                    </p>
                    <p className={"anime-entry-item"}>
                        <input type={"text"} className={"anime-entry-input"} onChange={handleOnChangeAnimeUrl}/>
                    </p>
                    <p className={"anime-entry-item"}>
                        <input type={"number"} className={"anime-entry-input"} onChange={handleOnChangeEpisodeCount}/>
                    </p>
                    <div>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}  showMonthYearDropdown className={"anime-entry-item"}/>
                    </div>
                    <p className={"anime-entry-item"}>
                        <input type={"text"} className={"anime-entry-input"} onChange={handleOnChangeTargetLanguage} />
                    </p>

                    <input type={"submit"} value={'Add Entry'} className={"anime-entry-submit"}/>
                </form>
            </div>
        </>
    )
}