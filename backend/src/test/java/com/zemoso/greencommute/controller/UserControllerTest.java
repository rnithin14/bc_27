package com.zemoso.greencommute.controller;

import com.fasterxml.jackson.databind.ObjectMapper;

import com.zemoso.greencommute.dto.job.JobMapper;
import com.zemoso.greencommute.dto.user.UserDto;
import com.zemoso.greencommute.entity.Job;
import com.zemoso.greencommute.service.job.JobServiceImpl;
import com.zemoso.greencommute.service.user.UserServiceImpl;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static com.zemoso.greencommute.helper.Constants.SAVED_JOB_DELETED;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
@AutoConfigureMockMvc
class UserControllerTest {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    JobServiceImpl jobService;

    @MockBean
    UserServiceImpl userService;

    @Autowired
    JobMapper jobMapper;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void listSavedJobs() throws Exception {
        List<Job> jobList = new ArrayList();
        Job job = new Job(1,null,"title","1/1/2000","description",true,"10000","designer","2yrs",null,null,"0 - 10 kms");
        Job job2 = new Job(2,null,"title","1/1/2000","description",true,"10000","designer","2yrs", null,null,"0 - 10 kms");
        jobList.add(job);
        jobList.add(job2);

        UserDto user=new UserDto();
        user.setId(1);
        user.setJobs(jobMapper.map(jobList));

        when(userService.getAllSavedJobs(userService.findUserById(1))).
                thenReturn(jobMapper.map(jobList));
        this.mockMvc.perform(get("/v1/users/1/jobs").header("Content-Type", "application/json")).andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)));
    }
    
    @Test
    void deleteSavedJobs() throws Exception {
        
        MvcResult result = mockMvc.perform(delete("/v1/users/1/jobs/1").header("Content-Type", "application/json")).andExpect(status().isOk())
                .andReturn();
    
        assertEquals(SAVED_JOB_DELETED, result.getResponse().getContentAsString());
    }
}