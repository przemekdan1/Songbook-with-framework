package com.example.songbook.services.implementation;

import com.example.songbook.dto.UserDto;
import com.example.songbook.mapper.UserMapper;
import com.example.songbook.models.User;
import com.example.songbook.repositories.UserRepository;
import com.example.songbook.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
@AllArgsConstructor
public class UserServiceImplementation implements UserService {

    private UserRepository userRepository;
    @Override
    public UserDto createUser(@RequestBody UserDto userDto) {

        User user = UserMapper.mapToUser(userDto);
        User savedUser = userRepository.save(user);

        return UserMapper.mapToUserDto(savedUser);
    }

    @Override
    public UserDto getUserById(Long userId) {
        return null;
    }
}
