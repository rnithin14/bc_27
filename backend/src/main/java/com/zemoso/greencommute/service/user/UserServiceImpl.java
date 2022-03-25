package com.zemoso.greencommute.service.user;

import com.zemoso.greencommute.dto.job.JobDto;
import com.zemoso.greencommute.dto.job.JobMapper;
import com.zemoso.greencommute.dto.user.UserDto;
import com.zemoso.greencommute.dto.user.UserMapper;
import com.zemoso.greencommute.entity.Job;
import com.zemoso.greencommute.entity.User;
import com.zemoso.greencommute.exception.JobNotFoundException;
import com.zemoso.greencommute.exception.UserNotFoundException;
import com.zemoso.greencommute.repository.JobRepository;
import com.zemoso.greencommute.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.zemoso.greencommute.helper.Constants.JOB_NOT_FOUND;
import static com.zemoso.greencommute.helper.Constants.USER_NOT_FOUND;

@Service
public class UserServiceImpl implements UserService {

    public static final String ERROR_MESSAGE1 = "Saved Job with id: ";
    public static final String ERROR_MESSAGE2 = " is not found";

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private JobMapper jobMapper;

    @Override
    public UserDto findUserById(int id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(USER_NOT_FOUND));
        return userMapper.map(user);
    }

   @Override
    public List<JobDto> getAllSavedJobs(UserDto user) {
        return user.getJobs();
    }
    
    @Override
    public void deleteSavedJob(int userId, int jobId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new UserNotFoundException(USER_NOT_FOUND));
        Job job = jobRepository.findById(jobId).orElseThrow(() -> new JobNotFoundException(JOB_NOT_FOUND));
        user.getJobs().remove(job);
        userRepository.save(user);
    }

}