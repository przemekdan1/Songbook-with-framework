package com.example.songbook.repositories;

import com.example.songbook.models.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;

@RestResource
public interface SongRepository extends JpaRepository<Song,Long> {
}
