package com.zemoso.greencommute.service.implementation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.zemoso.greencommute.service.AqiService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;

@Service
public class AqiServiceImpl implements AqiService {

    @Value("${api.key}")
    private String apiKey;

   @Override
    public String getAqi(String lat,String lon) throws JsonProcessingException {
        String uri = "https://api.waqi.info/feed/geo:" +lat+ ";" +lon+ "/?token="+apiKey;
        RestTemplate restTemplate = new RestTemplate();
        Object result = restTemplate.getForObject(uri,Object.class);
        ObjectMapper objectMapper = new ObjectMapper();
        String jsonString = objectMapper.writeValueAsString(result);
        Object object = JSONValue.parse(jsonString);
        JSONObject jsonObject = (JSONObject) object;
        Object data =jsonObject.get("data");
        JSONObject dataObject = (JSONObject) data;
        Object aqi =  dataObject.get("aqi");
        return aqi.toString();

    }
}
