package phuocvu.org.ecombackendspringboot.service;

import phuocvu.org.ecombackendspringboot.payload.user.CreateUserDto;
import phuocvu.org.ecombackendspringboot.payload.user.LoginUserDto;
import phuocvu.org.ecombackendspringboot.payload.user.ResponseUserDto;

import java.util.List;

public interface UserService {
    ResponseUserDto addUser(CreateUserDto userDto);

    ResponseUserDto loginUser(LoginUserDto user);

    List<ResponseUserDto> getAllUsers();

    ResponseUserDto getUserById(Long id);

    ResponseUserDto updateUser(ResponseUserDto userDto, long id);

    void deleteUserById(long id);
}
