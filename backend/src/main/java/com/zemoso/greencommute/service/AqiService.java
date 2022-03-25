package com.zemoso.greencommute.service;

import com.fasterxml.jackson.core.JsonProcessingException;

public interface AqiService {
     String getAqi(String lat,String lon) throws JsonProcessingException;
}
