package com.zemoso.greencommute.dto.job;

import com.zemoso.greencommute.entity.Job;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface JobMapper {
    
    Job map(JobDto jobDto);
    
    JobDto map(Job job);
    
    @Mapping(target = "id", source = "id")
    @Mapping(target = "jobTitle", source = "job_title")
    @Mapping(target = "experience", source = "experience_level")
    List<JobDto> map(List<Job> user);
    
}
