package com.zemoso.greencommute.service.user;

import com.zemoso.greencommute.dto.job.JobDto;
import com.zemoso.greencommute.dto.user.UserDto;

import java.util.List;

public interface UserService {
    
    UserDto findUserById(int id);
    
    List<JobDto> getAllSavedJobs(UserDto user);
    
    void deleteSavedJob(int userId, int jobId);

}