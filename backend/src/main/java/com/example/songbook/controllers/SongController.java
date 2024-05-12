package com.example.songbook.controllers;

import com.example.songbook.models.Song;
import com.example.songbook.repositories.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SongController {

    @Autowired
    SongRepository repo;

    @PostMapping("/addSong")
    public void addPerson (@RequestBody Song song){
        repo.save(song);
    }
}

