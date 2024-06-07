// SongDetails.js
import React from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import '../styles/SongDetails.css';

const songs = {
    'Hawiarska Koliba': {
        lyrics: `Już księżyc na niebo wychodzi
Zapłoną dokota ogniska
I wkrótce popłynie z Hawiarskiej Koliby
Melodia nam wszystkim tak bliska

Usiadła już brać rozśpiewana
Dokoła złotego ogniska
Wiatr niesie melodię z Hawiarskiej Koliby
Nad pola, nad lasy, nad urwiska

Zaniesie wiatr naszą melodię
Do domów Wołochów i Łemków
Piosenkę rajdową Hawiarskiej Koliby
Piosenkę krakowskich studentów

Już księżyc blednie na niebie
I promień słońca już błyska
Pogasy ogniska w Hawiarskiej Kolibie
Do snu kładzie się cała izba`,
        chords: `C G C C7
F G C7
F G C a
d G C7

C G C C7
F G C7
d G C7
C G C C7
F G C7
F G C a
d G C7

C G C C7
F G C7
F G C a
d G C7

C G C C7
F G C7
F G C a
d G C7`
    },
    'Awionetka': {
        lyrics: `Lyrics of Awionetka...`,
        chords: `Chords for Awionetka...`
    },
    'Anioł i Diabeł': {
        lyrics: `Lyrics of Anioł i Diabeł...`,
        chords: `Chords for Anioł i Diabeł...`
    },
    'Zawsze tam gdzie ty': {
        lyrics: `Lyrics of Zawsze tam gdzie ty...`,
        chords: `Chords for Zawsze tam gdzie ty...`
    },
};

const SongDetails = () => {
    const { title } = useParams();
    const navigate = useNavigate();
    const song = songs[title];

    if (!song) {
        return <div>Song not found</div>;
    }

    return (
        <div className="song-details-container">
            <div className="back-button" onClick={() => navigate('/home')}>
                ←
            </div>
            <div className="song-details-header">
                <h1>{title}</h1>
                <h3>{song.artist}</h3>
            </div>
            <div className="song-content">
                <pre className="song-lyrics">{song.lyrics}</pre>
                <pre className="song-chords">{song.chords}</pre>
            </div>
        </div>
    );
};

export default SongDetails;
