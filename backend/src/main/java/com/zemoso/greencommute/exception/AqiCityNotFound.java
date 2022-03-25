package com.zemoso.greencommute.exception;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@SuppressWarnings("squid:S1075")
public class AqiCityNotFound implements ErrorController{
    private static final  String PATH = "/error";
    @RequestMapping(PATH)
    @ResponseBody
    public String getErrorPath() {
        return "No Such City with given Co-ordinates Found";
    }

}
