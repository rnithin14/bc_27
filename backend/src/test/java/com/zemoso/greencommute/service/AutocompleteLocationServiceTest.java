package com.zemoso.greencommute.service;

import com.zemoso.greencommute.service.autocomplete.AutocompleteLocationServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;


@SpringBootTest
@ExtendWith(MockitoExtension.class)
@AutoConfigureMockMvc
class AutocompleteLocationServiceTest {

    @InjectMocks
    private AutocompleteLocationServiceImpl autocompleteLocationService;

    @Autowired
    private MockMvc mockMvc;

    @Test
    @SuppressWarnings("squid:S2699")
    void getAllLocations() throws Exception{
        String url = "https://api.geoapify.com/v1/geocode/autocomplete?text=" +
                "koramangala" +
                "&lang=en&filter=rect:67.99027268866803,7.751702320178893,97.67905450446051,36.24714839883016&bias=rect:67.82485856337212,7.206437410179106,97.75761817798968,35.82356103480063|countrycode:none&format=json&apiKey=b8746026fe2b46cc922e0a636b19efc6";

        this.mockMvc.perform(MockMvcRequestBuilders.get(url).contentType(MediaType.APPLICATION_JSON));

    }
}
