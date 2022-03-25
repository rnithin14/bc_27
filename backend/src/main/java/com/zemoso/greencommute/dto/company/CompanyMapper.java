package com.zemoso.greencommute.dto.company;

import com.zemoso.greencommute.entity.Company;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CompanyMapper {
    
    Company map(CompanyDto companyDto);
    
    CompanyDto map(Company company);
    
    @Mapping(target = "id", source = "id")
    List<CompanyDto> map(List<Company> company);
    
}
