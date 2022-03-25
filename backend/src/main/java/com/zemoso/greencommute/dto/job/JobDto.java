package com.zemoso.greencommute.dto.job;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.zemoso.greencommute.entity.Company;
import com.zemoso.greencommute.entity.Location;
import com.zemoso.greencommute.entity.Skill;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Data
public class JobDto {
    
    @JsonProperty("id")
    private int id;
    
    @JsonProperty("company")
    private Company company;
    
    @JsonProperty("jobTitle")
    private String jobTitle;
    
    @JsonProperty("datePosted")
    private String datePosted;
    
    @JsonProperty("description")
    private String description;
    
    @JsonProperty("active")
    private boolean active;
    
    @JsonProperty("salary")
    private String salary;
    
    @JsonProperty("jobType")
    private String jobType;
    
    @JsonProperty("experience")
    private String experience;
    
    @JsonProperty("skills")
    private List<Skill> skills;
    
    @JsonProperty("locations")
    private List<Location> locations;
    
    @JsonProperty("distance")
    private String distance;
    
}
