package com.example.songbook.services;

import com.example.songbook.dto.UserDto;
import com.example.songbook.models.User;

public interface UserService {
    UserDto createUser(UserDto userDto);

    UserDto getUserById(Long userId);
}