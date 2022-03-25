package com.zemoso.greencommute.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class SkillsNotFoundException extends RuntimeException{

    public SkillsNotFoundException(String message) {
        super(message);
    }
}
