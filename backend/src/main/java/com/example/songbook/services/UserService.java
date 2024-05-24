package com.example.songbook.services;

import com.example.songbook.dto.UserDto;
import com.example.songbook.mapper.UserMapper;
import com.example.songbook.models.User;

import java.util.List;

public interface UserService {
    UserDto createUser(UserDto userDto);
    UserDto getUserById(Long userId);
    List<UserDto> getAllUsers();
    UserDto updateUser(Long userId, UserDto updatedUser);
    void deleteUser(Long userId);
}
