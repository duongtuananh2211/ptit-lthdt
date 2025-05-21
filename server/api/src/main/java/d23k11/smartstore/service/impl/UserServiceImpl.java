package d23k11.smartstore.service.impl;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import d23k11.smartstore.exception.ResourceNotFoundException;
import d23k11.smartstore.entity.User;
import d23k11.smartstore.payload.user.CreateUserDto;
import d23k11.smartstore.payload.user.LoginUserDto;
import d23k11.smartstore.payload.user.ResponseUserDto;
import d23k11.smartstore.repository.user.CustomerRepository;
import d23k11.smartstore.repository.user.UserRepository;
import d23k11.smartstore.service.UserService;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final CustomerRepository customerRepository;
    private final ModelMapper mapper;

    public UserServiceImpl(UserRepository userRepository, ModelMapper mapper, CustomerRepository customerRepository) {
        this.userRepository = userRepository;
        this.customerRepository = customerRepository;
        this.mapper = mapper;
    }

    @Override
    public ResponseUserDto addUser(CreateUserDto userDto) {
        User user = mapper.map(userDto, User.class);
        User savedUser = userRepository.save(user);
        return mapper.map(savedUser, ResponseUserDto.class);
    }

    @Override
    public ResponseUserDto loginUser(LoginUserDto user) {
        User checkedUser = userRepository.checkLogin(user.getEmail(), user.getPassword());
        System.out.println(checkedUser);
        if (checkedUser != null) {
            return mapper.map(checkedUser, ResponseUserDto.class);
        }
        return null;
    }

    @Override
    public List<ResponseUserDto> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream().map((user) -> mapper.map(user, ResponseUserDto.class)).collect(Collectors.toList());
    }

    @Override
    public ResponseUserDto getUserById(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("user", "id", userId));
        return mapper.map(user, ResponseUserDto.class);
    }

    @Override
    public ResponseUserDto updateUser(ResponseUserDto userDto, long userId) {
        User existUser = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("user", "id", userId));
        mapper.map(userDto, existUser);
        User updateUser = userRepository.save(existUser);

        return mapper.map(updateUser, ResponseUserDto.class);
    }

    @Override
    public void deleteUserById(long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("user", "id", userId));
        userRepository.delete(user);
    }


}
