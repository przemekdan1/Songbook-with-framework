import React from 'react';
import SongTile from '../home/SongTile.jsx';
import '../../styles/FavouriteSongs.css';

const favoriteSongs = [
    { title: 'Awionetka', artist: 'Czyści Jak Łza', category: 'Piosenki turystyczne', rating: 4.2 },
    { title: 'Zawsze tam gdzie ty', artist: 'Lady Pank', category: 'Piosenki turystyczne', rating: 4.7 },
];

const FavoriteSongs = () => {
    return (
        <div className="favorite-songs">
            <h2>Favourite songs</h2>
            <div className="songs-grid">
                {favoriteSongs.map((song, index) => (
                    <SongTile
                        key={index}
                        title={song.title}
                        artist={song.artist}
                        category={song.category}
                        rating={song.rating}
                    />
                ))}
            </div>
        </div>
    );
};

export default FavoriteSongs;
