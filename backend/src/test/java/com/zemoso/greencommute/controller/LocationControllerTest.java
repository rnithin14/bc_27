package com.zemoso.greencommute.controller;

import com.zemoso.greencommute.service.autocomplete.AutocompleteLocationServiceImpl;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;


@SpringBootTest
@AutoConfigureMockMvc
 class LocationControllerTest {

    @InjectMocks
    AutocompleteLocationController autocompleteLocationController;

    @Autowired
    MockMvc mockMvc;

    @Mock
    private AutocompleteLocationServiceImpl autocompleteLocationService;

    @Test
    void findAqiByCity() throws Exception {
        this.mockMvc.perform(get("/v1/locations/bowen")).andExpect(MockMvcResultMatchers.status().isOk());
    }
}