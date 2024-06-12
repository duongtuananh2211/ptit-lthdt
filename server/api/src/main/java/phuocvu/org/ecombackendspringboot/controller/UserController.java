package phuocvu.org.ecombackendspringboot.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import phuocvu.org.ecombackendspringboot.payload.user.CreateUserDto;
import phuocvu.org.ecombackendspringboot.payload.user.LoginUserDto;
import phuocvu.org.ecombackendspringboot.payload.user.ResponseUserDto;
import phuocvu.org.ecombackendspringboot.service.UserService;


import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<ResponseUserDto> addUser(@RequestBody CreateUserDto userDto) {
        System.out.println(userDto);
        ResponseUserDto saveUser = userService.addUser(userDto);
        return new ResponseEntity<>(saveUser, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<ResponseUserDto> loginUser(@RequestBody LoginUserDto user) {
        ResponseUserDto saveUser = userService.loginUser(user);
        if (saveUser == null) {
            return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
        }
        return new ResponseEntity<>(saveUser, HttpStatus.OK);
    }

    @GetMapping
    public List<ResponseUserDto> getAllUser() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseUserDto> getUserById(@PathVariable(name = "id") Long id) {
        ResponseUserDto userDto = userService.getUserById(id);
        return ResponseEntity.ok(userDto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponseUserDto> updateUser(@RequestBody ResponseUserDto userDto, @PathVariable(name = "id") Long id) {
        ResponseUserDto saveUser = userService.updateUser(userDto, id);
        return ResponseEntity.ok(saveUser);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable(name = "id") Long id) {
        userService.deleteUserById(id);
        return ResponseEntity.ok("User deleted successfully!");
    }
}

