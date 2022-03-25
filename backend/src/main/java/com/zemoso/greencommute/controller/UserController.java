package com.zemoso.greencommute.controller;


import com.zemoso.greencommute.dto.job.JobDto;
import com.zemoso.greencommute.service.job.JobService;
import com.zemoso.greencommute.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.zemoso.greencommute.helper.Constants.SAVED_JOB_DELETED;

@RestController
@CrossOrigin
@RequestMapping("v1/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private JobService jobService;

    @GetMapping("/{id}/jobs")
    public List<JobDto> listSavedJobs(@PathVariable("id") int userId) {
        return userService.getAllSavedJobs(userService.findUserById(userId));
    }
    
    @DeleteMapping("/{id}/jobs/{jobId}")
    public ResponseEntity<String> deleteSavedJobs(@PathVariable("id") int userId, @PathVariable("id") int jobId) {
        userService.deleteSavedJob(userId, jobId);
        return ResponseEntity.status(HttpStatus.OK).body(SAVED_JOB_DELETED);
    }
}