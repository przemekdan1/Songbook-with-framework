package com.example.songbook.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Song")
public class Song {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String song_title;
    private String content;
    private long id_artist;
    private long id_category;

    public Song() {
    }
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getSong_title() {
        return song_title;
    }

    public void setSong_title(String song_title) {
        this.song_title = song_title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public long getId_artist() {
        return id_artist;
    }

    public void setId_artist(long id_artist) {
        this.id_artist = id_artist;
    }

    public long getId_category() {
        return id_category;
    }

    public void setId_category(long id_category) {
        this.id_category = id_category;
    }

    @Override
    public String toString() {
        return "Song{" +
                "id=" + id +
                ", song_title='" + song_title + '\'' +
                ", content='" + content + '\'' +
                ", id_artist=" + id_artist +
                ", id_category=" + id_category +
                '}';
    }
}
