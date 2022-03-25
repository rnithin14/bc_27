package com.zemoso.greencommute.service;

import com.zemoso.greencommute.dto.job.JobDto;
import com.zemoso.greencommute.dto.job.JobMapper;
import com.zemoso.greencommute.dto.user.UserDto;
import com.zemoso.greencommute.dto.user.UserMapper;
import com.zemoso.greencommute.entity.Job;
import com.zemoso.greencommute.entity.User;
import com.zemoso.greencommute.exception.UserNotFoundException;
import com.zemoso.greencommute.repository.JobRepository;
import com.zemoso.greencommute.repository.UserRepository;
import com.zemoso.greencommute.service.user.UserServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static com.zemoso.greencommute.helper.Constants.JOB_NOT_FOUND;
import static com.zemoso.greencommute.helper.Constants.USER_NOT_FOUND;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

@SpringBootTest
@AutoConfigureMockMvc
class UserServiceTest {

    @MockBean
    UserRepository userRepository;
    
    @MockBean
    JobRepository jobRepository;
    
    @Autowired
    UserServiceImpl userService;

    @Autowired
    UserMapper userMapper;

    @Autowired
    JobMapper jobMapper;

    @Test
    void findUserById_Test() {

        List<Job> jobs = new ArrayList<>();

        Optional<User> result = Optional.of(new User(1,"gayatri23", "Gayatri", "Lastname", "password", jobs));

        when(userRepository.findById(1)).thenReturn(result);
        UserDto userDto = userService.findUserById(1);

        verify(userRepository, times(1)).findById(1);

        assertEquals(userMapper.map(result.get()).getId(), userDto.getId());
    }


    @Test
    void  findUserById_ExceptionTest() {
        Exception exception = assertThrows(UserNotFoundException.class, () -> {
            userService.findUserById(8);
        });
        String actualMessage = exception.getMessage();
        assertEquals(USER_NOT_FOUND,actualMessage);
    }

    @Test
    void getAllSavedJobsTest() {
        List<Job> jobList = new ArrayList();
        Job job = new Job(1,null,"title","1/1/2000","description",true,"10000","designer","2yrs",null,null,"0 - 10 kms");
        Job job2 = new Job(2,null,"title","1/1/2000","description",true,"10000","designer","2yrs",null,null,"0 - 10 kms");
        jobList.add(job);
        jobList.add(job2);

        UserDto user=new UserDto();
        user.setId(1);
        user.setJobs(jobMapper.map(jobList));
        List<JobDto> jobsFetched = userService.getAllSavedJobs(user);
        assertEquals(2,jobsFetched.size());
    }
    
    @Test
    void deleteSavedJob() {
        Optional<Job> job = Optional.of(new Job(1,null,"title","1/1/2000","description",true,"10000","designer","2yrs",null,null,"0 - 10 kms"));
        List<Job> jobList = new ArrayList<>();
        jobList.add(job.get());
        Optional<User> user = Optional.of(new User(1,"gayatri23", "Gayatri", "Lastname", "password", jobList));
    
    
        when(userRepository.findById(1)).thenReturn(user);
        when(jobRepository.findById(1)).thenReturn(job);
        userService.deleteSavedJob(1, 1);
    
        verify(userRepository, times(1)).save(user.get());
    }
}