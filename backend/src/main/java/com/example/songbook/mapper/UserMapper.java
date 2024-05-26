package com.example.songbook.mapper;

import com.example.songbook.dto.UserDto;
import com.example.songbook.models.User;

public class UserMapper {

    public static UserDto mapToUserDto(User user){
        return new UserDto(
                user.getId(),
                user.getEmail(),
                user.getUsername(),
                user.getPassword(),
                user.getId_user_details(),
                user.getId_role()
        );
    }

    public static User mapToUser(UserDto userDto){
        return new User(
                userDto.getId(),
                userDto.getEmail(),
                userDto.getUsername(),
                userDto.getPassword(),
                userDto.getId_user_details(),
                userDto.getId_role()
        );
    }
}
