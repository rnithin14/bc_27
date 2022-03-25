package com.zemoso.greencommute.dto.user;

import com.zemoso.greencommute.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    User map(UserDto userDto);

    UserDto map(User user);

}