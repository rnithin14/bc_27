package com.zemoso.greencommute.dto.job;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.zemoso.greencommute.entity.Location;
import com.zemoso.greencommute.entity.Skill;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Data
public class JobBodyDto {
    @JsonProperty("skills")
    private List<Skill> skills;
    
    @JsonProperty("locations")
    private List<Location> locations;
    
    @JsonProperty("distance")
    private List<String> distance;
}
