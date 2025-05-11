import {useEffect, useState} from "react";
import '/src/assets/css/anime-entry.css';
import {getAnimeEntriesByUser} from "../firebase/animeentryfunctions.js";

export default function MyEntries() {
    const [entries, setEntries] = useState([]);
    //console.log(getAnimeEntriesByUser(sessionStorage.getItem("userid")))

    const fetchEntries = async () => {
        const userId = sessionStorage.getItem("userid");
        const fetchedEntries = await getAnimeEntriesByUser(userId);
        setEntries(fetchedEntries);
        console.log(fetchedEntries);
    };

    useEffect(() => {
        const fetchData = async () => {
            await fetchEntries();
        };

        fetchData();
    }, []);

    return (
        <div style={styles.container}>
            {entries.map((entry) => (
                <div style={styles.card} key={entry.id}>
                    <h3 style={styles.title}>{entry.title}</h3>
                    <p style={styles.text}>Episodes: {entry.episodeCount}</p>
                    <p style={styles.text}>Language: {entry.targetLanguage}</p>
                    <p style={styles.text}>Date Added: {new Date(entry.entryDate).toLocaleDateString()}</p>
                    <a href={entry.url} target="_blank" rel="noopener noreferrer" style={styles.link}>Watch</a>
                </div>
            ))}
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        color: 'black'
    },
    card: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 20px',
        border: '1px solid #ddd',
        borderRadius: '6px',
        backgroundColor: '#fafafa',
        boxShadow: '1px 1px 5px rgba(0,0,0,0.05)',
    },
    info: {
        flexGrow: 1,
    },
    title: {
        margin: '0 0 4px 0',
        fontSize: '1.1rem',
        fontWeight: 'bold',
    },
    text: {
        margin: '2px 0',
        fontSize: '0.95rem',
    },
    link: {
        marginLeft: '16px',
        color: '#007bff',
        textDecoration: 'none',
        fontWeight: 'bold',
        whiteSpace: 'nowrap',
    }
};
