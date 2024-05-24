package com.example.songbook.controllers;

import jakarta.persistence.PreRemove;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @GetMapping("/home")
    public String home(){
        return "home";
    }

    @GetMapping("secure/path")
    @PreAuthorize("hasRole('ADMIN')")
    public String secured(){
        return "I'm secure";
    }
}

