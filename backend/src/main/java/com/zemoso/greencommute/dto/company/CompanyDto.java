package com.zemoso.greencommute.dto.company;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class CompanyDto {
    
    @JsonProperty("id")
    private int id;
    
    @JsonProperty("name")
    private String name;
    
    @JsonProperty("logo")
    private String logo;
    
    @JsonProperty("contactName")
    private String contactName;
    
    @JsonProperty("contactEmail")
    private String contactEmail;
    
    @JsonProperty("contactNumber")
    private String contactNumber;
    
    @JsonProperty("about")
    private String about;
    
}
