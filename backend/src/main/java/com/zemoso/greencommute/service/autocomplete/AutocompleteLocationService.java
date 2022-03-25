package com.zemoso.greencommute.service.autocomplete;


import com.zemoso.greencommute.dto.autocomplete.AutocompleteLocationDto;

public interface AutocompleteLocationService {
    AutocompleteLocationDto getAllLocations(String userInput);
}
