package com.zemoso.greencommute.service;
import com.zemoso.greencommute.service.implementation.AqiServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

@SpringBootTest
@RunWith(MockitoJUnitRunner.class)
@AutoConfigureMockMvc
class AqiServiceTest {

    @Autowired
    private AqiServiceImpl aqiService;

    @Autowired
    MockMvc mockMvc;

    @Test
    @SuppressWarnings("squid:S2699")
    void testGetAqi() throws Exception {

        this.mockMvc.perform(MockMvcRequestBuilders.get("/api.waqi.info/feed/geo:10.3;20.7/?token=82ea56acd0d2d09cbeadce0fed169b3d7a0db960").contentType(MediaType.APPLICATION_JSON));

    }

}
