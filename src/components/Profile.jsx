import React from 'react';

export default function Profile() {
    const user = {
        name: 'John Doe',
        email: 'john@example.com',
        bio: 'Language lover. Anime binger. Coffee addict ☕️',
        avatar: 'https://i.pravatar.cc/150?img=12', // you can change this to any avatar/image url
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <img src={user.avatar} alt="Avatar" style={styles.avatar} />
                <h2>{user.name}</h2>
                <p style={styles.email}>{user.email}</p>
                <p style={styles.bio}>{user.bio}</p>
                <button style={styles.button}>Edit Profile</button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '4rem',
    },
    card: {
        width: '320px',
        background: '#fff',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        padding: '2rem',
        textAlign: 'center',
        fontFamily: 'sans-serif',
    },
    avatar: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        marginBottom: '1rem',
    },
    email: {
        color: '#777',
        fontSize: '0.9rem',
        marginBottom: '0.5rem',
    },
    bio: {
        color: '#555',
        fontSize: '0.95rem',
        marginBottom: '1.5rem',
    },
    button: {
        padding: '0.5rem 1rem',
        backgroundColor: '#3f51b5',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
    },
};
