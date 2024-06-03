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
        return User.builder()
                .id(userDto.getId())
                .email(userDto.getEmail())
                .username(userDto.getUsername())
                .password(userDto.getPassword())
                .id_user_details(userDto.getId_user_details())
                .id_role(userDto.getId_role())
                .build();
    }

}
