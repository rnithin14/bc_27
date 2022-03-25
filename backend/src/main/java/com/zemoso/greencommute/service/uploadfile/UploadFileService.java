package com.zemoso.greencommute.service.uploadfile;

import org.springframework.web.multipart.MultipartFile;

public interface UploadFileService {
    String getName(MultipartFile multipartFile);
}
