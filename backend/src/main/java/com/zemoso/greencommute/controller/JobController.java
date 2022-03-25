package com.zemoso.greencommute.controller;

import com.zemoso.greencommute.dto.job.JobBodyDto;
import com.zemoso.greencommute.dto.job.JobDto;
import com.zemoso.greencommute.service.job.JobServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("v1")
public class JobController {
    
    @Autowired
    private JobServiceImpl jobService;
    
    @GetMapping(value = "/jobs",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<JobDto>> getJobs(@RequestParam(required = false) JobBodyDto jobBody) {
        System.out.println(jobBody);
        return ResponseEntity.status(HttpStatus.OK).body(jobService.getJobList(jobBody));
    }
    
    @GetMapping(value = "/jobs/{jobId}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<JobDto> getJobById(@PathVariable("jobId") int jobId) {
        return ResponseEntity.status(HttpStatus.OK).body(jobService.getJobById(jobId));
    }
    
}
