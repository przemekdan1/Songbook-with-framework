package com.example.songbook.services.implementation;

import com.example.songbook.dto.UserDto;
import com.example.songbook.exception.ResourceNotFoundException;
import com.example.songbook.mapper.UserMapper;
import com.example.songbook.models.User;
import com.example.songbook.models.Role;
import com.example.songbook.repositories.UserRepository;
import com.example.songbook.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.Optional;

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
        User user = userRepository.findById(userId)
                .orElseThrow(()->
                        new ResourceNotFoundException("User with id: "+userId+" doesn't exists."));
        return UserMapper.mapToUserDto(user);
    }

    @Override
    public List<UserDto> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream().map((user) -> UserMapper.mapToUserDto(user))
                .collect(Collectors.toList());
    }

    @Override
    public UserDto updateUser(Long userId, UserDto updatedUser) {
        User user = userRepository.findById(userId)
                .orElseThrow(()->
                        new ResourceNotFoundException("User with id: "+userId+" doesn't exists."));

        user.setEmail(updatedUser.getEmail());
        user.setUsername(updatedUser.getUsername());
        user.setPassword(updatedUser.getPassword());
        user.setId_user_details(updatedUser.getId_user_details());
        user.setId_role(updatedUser.getId_role());

        User updatedUserObject =  userRepository.save(user);

        return UserMapper.mapToUserDto(updatedUserObject);
    }

    @Override
    public void deleteUser(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(()->
                        new ResourceNotFoundException("User with id: "+userId+" doesn't exists."));

        userRepository.deleteById(userId);
    }

    @Override
    public User setAdminRole(Long userId) {
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            user.setRole(Role.ADMIN);
            userRepository.save(user);
            System.out.println("Role for user " + user.getUsername() + " is set to: " + user.getRole());
            return user;
        } else {
            throw new RuntimeException("User not found with ID: " + userId);
        }
    }



}
