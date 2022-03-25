package com.zemoso.greencommute.controller;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.zemoso.greencommute.dto.skill.SkillMapper;
import com.zemoso.greencommute.entity.Skill;
import com.zemoso.greencommute.service.skill.SkillServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import java.util.ArrayList;
import java.util.List;
import static org.hamcrest.Matchers.hasSize;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class SkillControllerTest {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    SkillServiceImpl skillService;

    @Autowired
    SkillMapper skillMapper;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void getSkills() throws Exception {
        List<Skill> jobList = new ArrayList();
        Skill job = new Skill(1,"Angular");
        Skill job2 = new Skill(2,"Java");
        jobList.add(job);
        jobList.add(job2);
        when(skillService.getSkillList()).thenReturn(skillMapper.map(jobList));
        this.mockMvc.perform(get("/v1/skills").header("Content-Type", "application/json")).andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)));
    }

}