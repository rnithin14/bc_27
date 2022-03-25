package com.zemoso.greencommute.controller;

import com.zemoso.greencommute.service.implementation.AqiServiceImpl;
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
 class AqiControllerTest {

    @InjectMocks
    AqiController aqiController;

    @Autowired
    MockMvc mockMvc;

    @Mock
    private AqiServiceImpl aqiService;

    @Test
    void findAqiByCity() throws Exception {
      this.mockMvc.perform(get("/v1/aqi/10.3,20.7")).andExpect(MockMvcResultMatchers.status().isOk());

    }

}
