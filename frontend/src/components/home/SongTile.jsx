import React from 'react';
import '../../styles/SongList.css';
import { useNavigate } from 'react-router-dom';


const SongTile = ({ title, artist, category, rating }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/song/${title}`);
    };

    return (
        <div className="song-tile" onClick={handleClick}>
            <div className="song-info">
                <div className="song-title">{title}</div>
                <div className="song-details">Wyk: {artist}</div>
                <div className="song-details">Kategoria: {category}</div>
            </div>
            <div className="song-rating">
                <span className="star">⭐</span>
                {rating}
            </div>
        </div>
    );
};
export default SongTile;