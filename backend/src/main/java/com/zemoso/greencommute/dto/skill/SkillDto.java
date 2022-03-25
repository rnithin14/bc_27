package com.zemoso.greencommute.dto.skill;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class SkillDto {

    @JsonProperty("id")
    private int id;

    @JsonProperty("name")
    private String name;

}