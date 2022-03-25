package com.zemoso.greencommute.repository;

import com.zemoso.greencommute.dto.job.JobBodyDto;
import com.zemoso.greencommute.entity.Job;

import java.util.List;

public interface JobRepositoryCustom {
    List<Job> findBySkillsInAndLocationsIn(JobBodyDto jobBody);
    
}
