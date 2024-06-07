import React from 'react';
import SongTile from './SongTile';
import '../../styles/SongList.css';

const songs = [
    { title: 'Hawiarska Koliba', artist: 'Wiesław Witek', category: 'Piosenki turystyczne', rating: 4.9 },
    { title: 'Awionetka', artist: 'Czyści Jak Łza', category: 'Piosenki turystyczne', rating: 4.2 },
    { title: 'Anioł i Diabeł', artist: 'Anna Borowa', category: 'Piosenki turystyczne', rating: 4.4 },
    { title: 'Zawsze tam gdzie ty', artist: 'Lady Pank', category: 'Piosenki turystyczne', rating: 4.7 },
    { title: 'Zawsze tam gdzie ty', artist: 'Lady Pank', category: 'Piosenki turystyczne', rating: 4.7 }
];

const SongList = () => {
    return (
        <div className="song-list">
            {songs.map((song, index) => (
                <SongTile
                    key={index}
                    title={song.title}
                    artist={song.artist}
                    category={song.category}
                    rating={song.rating}
                />
            ))}
        </div>
    );
};

export default SongList;
