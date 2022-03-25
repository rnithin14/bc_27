package com.zemoso.greencommute.service.job;

import com.zemoso.greencommute.dto.job.JobBodyDto;
import com.zemoso.greencommute.dto.job.JobDto;
import com.zemoso.greencommute.dto.job.JobMapper;
import com.zemoso.greencommute.entity.Job;
import com.zemoso.greencommute.exception.JobNotFoundException;

import com.zemoso.greencommute.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.zemoso.greencommute.helper.Constants.JOB_NOT_FOUND;

@Service
public class JobServiceImpl implements JobService {
    
    @Autowired
    private JobRepository jobRepository;
    @Autowired
    private JobMapper jobMapper;
    
    @Override
    public List<JobDto> getJobList(JobBodyDto jobBody){
        
        if(null != jobBody) 
            return jobMapper.map(jobRepository.findBySkillsInAndLocationsIn(jobBody));
        else
            return jobMapper.map(jobRepository.findAll());
    }
    
    @Override
    public JobDto getJobById(int id){
        Job job = jobRepository.findById(id)
                .orElseThrow(() -> new JobNotFoundException(JOB_NOT_FOUND));
        
        return jobMapper.map(job);
    }
    
}
