package com.zemoso.greencommute.dto.autocomplete;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.util.List;

@ToString @NoArgsConstructor @AllArgsConstructor @Getter @Setter
public class AutocompleteLocationDto {

    @JsonProperty("results")
    private List<AutocompleteLocationDataDto> autocompleteLocationResponseDataDtos;


}
