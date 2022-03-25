package com.zemoso.greencommute.service.job;

import com.zemoso.greencommute.dto.job.JobBodyDto;
import com.zemoso.greencommute.dto.job.JobDto;

import java.util.List;

public interface JobService {
    
    public List<JobDto> getJobList(JobBodyDto jobBody);
    public JobDto getJobById(int id);
    
}
