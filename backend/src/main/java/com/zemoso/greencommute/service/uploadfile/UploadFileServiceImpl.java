package com.zemoso.greencommute.service.uploadfile;

import org.apache.poi.xwpf.extractor.XWPFWordExtractor;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


@Service
public class UploadFileServiceImpl implements UploadFileService {
    @Override
    public String getName(MultipartFile multipartFile) {
        String res="";
        int index=0;
        try {
            InputStream initialStream = multipartFile.getInputStream();
            XWPFDocument doc = new XWPFDocument(initialStream);
            XWPFWordExtractor xwpfWordExtractor = new XWPFWordExtractor(doc);
            String docText = xwpfWordExtractor.getText();
            Pattern pattern = Pattern.compile("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
            Scanner myReader = new Scanner(docText);
            while (myReader.hasNextLine()) {
                String data = myReader.nextLine();
                data = data.replace(";", " ");
                data = data.trim();
                Matcher matcher = pattern.matcher(data);
                while (matcher.find()) {
                    index = matcher.group().indexOf('@');
                    res = matcher.group();
                }

            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return res.substring(0,index);
    }
}

