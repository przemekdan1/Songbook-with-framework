package com.example.songbook.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "Song")
public class Song {
    @Id
    private long id;
    private String song_title;
    private String content;
    private long id_artist;
    private long id_category;
}
