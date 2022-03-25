package com.zemoso.greencommute.repository;

import com.zemoso.greencommute.dto.job.JobBodyDto;
import com.zemoso.greencommute.entity.Job;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JobRepository extends JpaRepository<Job, Integer>, JobRepositoryCustom {
    List<Job> findBySkillsInAndLocationsIn(JobBodyDto jobBody);
    
}
