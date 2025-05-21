package d23k11.smartstore.service;

import d23k11.smartstore.payload.user.CreateUserDto;
import d23k11.smartstore.payload.user.LoginUserDto;
import d23k11.smartstore.payload.user.ResponseUserDto;

import java.util.List;

public interface UserService {
    ResponseUserDto addUser(CreateUserDto userDto);

    ResponseUserDto loginUser(LoginUserDto user);

    List<ResponseUserDto> getAllUsers();

    ResponseUserDto getUserById(Long id);

    ResponseUserDto updateUser(ResponseUserDto userDto, long id);

    void deleteUserById(long id);
}
