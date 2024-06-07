package com.example.songbook.controllers;

import com.example.songbook.models.Song;
import com.example.songbook.repositories.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SongController {

    @Autowired
    private final SongRepository songRepository;

    @Autowired
    public SongController(SongRepository songRepository) {
        this.songRepository = songRepository;
    }

    @GetMapping("/api/songs")
    public List<Song> getAllSongs() {
        return songRepository.findAll();
    }
}
