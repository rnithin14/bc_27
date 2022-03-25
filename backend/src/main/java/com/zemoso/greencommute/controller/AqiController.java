package com.zemoso.greencommute.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.zemoso.greencommute.service.AqiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("v1/aqi")
public class AqiController {

   @Autowired
   private AqiService aqiService;

    @GetMapping("/{lat},{lon}")
    public String getAqi(@PathVariable("lat")String lat,@PathVariable("lon")String lon) throws JsonProcessingException {
      return aqiService.getAqi(lat,lon);
    }

}
