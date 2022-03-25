package com.zemoso.greencommute.controller;

import com.fasterxml.jackson.databind.ObjectMapper;

import com.zemoso.greencommute.dto.job.JobMapper;
import com.zemoso.greencommute.entity.Company;
import com.zemoso.greencommute.entity.Job;
import com.zemoso.greencommute.entity.Skill;
import com.zemoso.greencommute.service.job.JobServiceImpl;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;


import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.ArgumentMatchers.isNull;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class JobControllerTest {
    
    @Autowired
    MockMvc mockMvc;
    
    @MockBean
    JobServiceImpl jobService;
    
    @Autowired
    JobMapper jobMapper;
    
    @Autowired
    private ObjectMapper objectMapper;
    
    @Test
    void getJobs() throws Exception {
        List<Job> jobList = new ArrayList();
        Job job = new Job(1,null,"title","1/1/2000","description",true,"10000","designer","2yrs", null,null,"0 - 10 kms");
        Job job2 = new Job(2,null,"title","1/1/2000","description",true,"10000","designer","2yrs", null,null,"0 - 10 kms");
        jobList.add(job);
        jobList.add(job2);
        when(jobService.getJobList(null)).thenReturn(jobMapper.map(jobList));
        this.mockMvc.perform(get("/v1/jobs").header("Content-Type", "application/json")).andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)));
    }
    
    
    @Test
    void getJobById() throws Exception {
        Job job = new Job(1,null,"title","1/1/2000","description",true,"10000","designer","2yrs",null,null,"0 - 10 kms");
        when(jobService.getJobById(1)).thenReturn(jobMapper.map(job));
        
        
        this.mockMvc.perform(get("/v1/jobs/{jobId}", 1).header("Content-Type", "application/json")).andExpect(status().isOk())
                .andExpect(jsonPath("$.id", is(1)))
                .andExpect(jsonPath("$.jobTitle", is("title")))
                .andExpect(jsonPath("$.datePosted", is("1/1/2000")))
                .andExpect(jsonPath("$.description", is("description")))
                .andExpect(jsonPath("$.active", is(true)))
                .andExpect(jsonPath("$.salary", is("10000")))
                .andExpect(jsonPath("$.jobType", is("designer")))
                .andExpect(jsonPath("$.experience", is("2yrs")));
    }
    
}