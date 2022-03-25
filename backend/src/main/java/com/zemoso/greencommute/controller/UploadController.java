package com.zemoso.greencommute.controller;

import com.zemoso.greencommute.service.uploadfile.UploadFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin
@RequestMapping("/v1")
public class UploadController {

    @Autowired
    private UploadFileService uploadFileService;

    @PostMapping("/upload")
    public String getNameFromFile(@RequestParam("file") MultipartFile multipartFile) {
        return uploadFileService.getName(multipartFile);
    }
}