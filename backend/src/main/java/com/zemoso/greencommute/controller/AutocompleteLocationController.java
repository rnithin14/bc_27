package com.zemoso.greencommute.controller;

import com.zemoso.greencommute.dto.autocomplete.AutocompleteLocationDto;
import com.zemoso.greencommute.service.autocomplete.AutocompleteLocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
@RequestMapping("/v1/locations")
public class AutocompleteLocationController {

    @Autowired
    private AutocompleteLocationService autocompleteLocationService;

    @GetMapping("/{userInput}")
    public AutocompleteLocationDto getLocations(@PathVariable("userInput") String userInput){
        return autocompleteLocationService.getAllLocations(userInput);
    }

}