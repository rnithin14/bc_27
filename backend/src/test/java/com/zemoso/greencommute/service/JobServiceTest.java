package com.zemoso.greencommute.service;

import com.zemoso.greencommute.dto.job.JobBodyDto;
import com.zemoso.greencommute.dto.job.JobDto;
import com.zemoso.greencommute.dto.job.JobMapper;
import com.zemoso.greencommute.entity.Job;
import com.zemoso.greencommute.entity.Skill;
import com.zemoso.greencommute.exception.JobNotFoundException;
import com.zemoso.greencommute.repository.JobRepository;
import com.zemoso.greencommute.service.job.JobServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static com.zemoso.greencommute.helper.Constants.JOB_NOT_FOUND;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
@AutoConfigureMockMvc
class JobServiceTest {
    
    @Autowired
    JobServiceImpl jobService;
    
    @MockBean
    JobRepository jobRepository;
    
    @Autowired
    JobMapper jobMapper;
    
    @Test
    void getJobListTest() {
        List<Job> jobList = new ArrayList();
        Job job = new Job(1,null,"title","1/1/2000","description",true,"10000","designer","2yrs",null,null,"0 - 10 kms");
        Job job2 = new Job(2,null,"title","1/1/2000","description",true,"10000","designer","2yrs",null,null,"0 - 10 kms");
        jobList.add(job);
        jobList.add(job2);
        
        List<Skill> skillList = new ArrayList();
        Skill skill = new Skill(1,"Angular");
        skillList.add(skill);
        
        JobBodyDto jobBodyDto = new JobBodyDto();
        jobBodyDto.setSkills(skillList);
        
        when(jobRepository.findBySkillsInAndLocationsIn(jobBodyDto)).thenReturn(jobList);
        List<JobDto> jobDtoList = jobService.getJobList(jobBodyDto);
        assertEquals(2, jobDtoList.size());
        verify(jobRepository, times(1)).findBySkillsInAndLocationsIn(jobBodyDto);
    
        when(jobRepository.findAll()).thenReturn(jobList);
        List<JobDto> jobDtoList2 = jobService.getJobList(null);
        assertEquals(2, jobDtoList2.size());
        verify(jobRepository, times(1)).findAll();
        
    }
    
    @Test
    void getJobByIdTest() throws JobNotFoundException {
        Optional<Job> result = Optional.of(new Job(1,null,"title","1/1/2000","description",true,"10000","designer","2yrs",null,null,"0 - 10 kms"));
    
        when(jobRepository.findById(1)).thenReturn(result);
        JobDto jobDto = jobService.getJobById(1);
        
        verify(jobRepository, times(1)).findById(1);
        
        assertEquals(jobMapper.map(result.get()), jobDto);
        
        Optional<Job> errorResult = Optional.empty();
        when(jobRepository.findById(1)).thenReturn(errorResult);
        try {
            jobService.getJobById(1);
        } catch (JobNotFoundException exception) {
            assertEquals(JOB_NOT_FOUND, exception.getMessage());
        }
    }
    
}
