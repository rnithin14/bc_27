package com.zemoso.greencommute.controller;


import com.zemoso.greencommute.dto.skill.SkillDto;
import com.zemoso.greencommute.service.skill.SkillServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@CrossOrigin
public class SkillController {


    @Autowired
    private SkillServiceImpl skillService;

    @GetMapping(value = "/v1/skills",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<SkillDto>> getSkills() {

        return ResponseEntity.status(HttpStatus.OK).body(skillService.getSkillList());
    }



}
