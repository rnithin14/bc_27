package com.zemoso.greencommute.dto.autocomplete;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@ToString @NoArgsConstructor @AllArgsConstructor @Getter @Setter
public class AutocompleteLocationDataDto {

    @JsonProperty("formatted")
    String location;

    @JsonProperty("lat")
    String latitude;

    @JsonProperty("lon")
    String longitude;

}
