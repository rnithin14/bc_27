package com.zemoso.greencommute.dto.skill;



import com.zemoso.greencommute.entity.Skill;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface SkillMapper {

    Skill map(SkillDto skillDto);

    SkillDto map(Skill job);

    @Mapping(target = "id", source = "id")
    @Mapping(target = "name", source = "name")
    List<SkillDto> map(List<Skill> skills);

}