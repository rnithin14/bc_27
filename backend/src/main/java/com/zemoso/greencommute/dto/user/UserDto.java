package com.zemoso.greencommute.dto.user;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.zemoso.greencommute.dto.job.JobDto;
import lombok.*;

import java.util.List;

@Getter @Setter @ToString @AllArgsConstructor @NoArgsConstructor
public class UserDto {

    int id;

    @JsonManagedReference
    private List<JobDto> jobs;

}