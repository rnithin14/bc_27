package com.zemoso.greencommute.service.skill;


import com.zemoso.greencommute.dto.skill.SkillDto;
import com.zemoso.greencommute.dto.skill.SkillMapper;
import com.zemoso.greencommute.entity.Skill;
import com.zemoso.greencommute.exception.JobNotFoundException;
import com.zemoso.greencommute.repository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

import static com.zemoso.greencommute.helper.Constants.SKILLS_NOT_FOUND;


@Service
public class SkillServiceImpl implements SkillService {

    @Autowired
    private SkillRepository skillRepository;
    @Autowired
    private SkillMapper skillMapper;

    @Override
    public List<SkillDto> getSkillList(){
        
            List<Skill> skills = skillRepository.findAll();
            if(skills.isEmpty())
                throw new JobNotFoundException(SKILLS_NOT_FOUND);

        return skillMapper.map(skillRepository.findAll());
    }


}