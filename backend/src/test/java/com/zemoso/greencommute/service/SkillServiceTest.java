package com.zemoso.greencommute.service;


import com.zemoso.greencommute.dto.skill.SkillDto;
import com.zemoso.greencommute.dto.skill.SkillMapper;
import com.zemoso.greencommute.entity.Skill;
import com.zemoso.greencommute.repository.SkillRepository;
import com.zemoso.greencommute.service.skill.SkillServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import java.util.ArrayList;
import java.util.List;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
@AutoConfigureMockMvc
class SkillServiceTest {

    @Autowired
    SkillServiceImpl SkillService;

    @MockBean
    SkillRepository SkillRepository;

    @Autowired
    SkillMapper skillMapper;

    @Test
    void getSkillListTest() {
        List<Skill> SkillList = new ArrayList();
        Skill skill = new Skill(1,"Angular");
        Skill skill2 = new Skill(2,"Java");
        SkillList.add(skill);
        SkillList.add(skill2);

        when(SkillRepository.findAll()).thenReturn(SkillList);
        List<SkillDto> SkillDtoList = SkillService.getSkillList();
        assertEquals(2, SkillDtoList.size());

    }




}
