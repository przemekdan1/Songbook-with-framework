package com.example.songbook.controllers;

import com.example.songbook.models.User;
import com.example.songbook.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private UserService userService;

    @PutMapping("/setAdmin/{userId}")
    public User setAdminRole(@PathVariable Long userId) {
        return userService.setAdminRole(userId);
    }
}