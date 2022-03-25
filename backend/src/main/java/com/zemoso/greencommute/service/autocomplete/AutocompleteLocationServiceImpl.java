package com.zemoso.greencommute.service.autocomplete;

import com.zemoso.greencommute.dto.autocomplete.AutocompleteLocationDto;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class AutocompleteLocationServiceImpl implements AutocompleteLocationService {
    @Override
    public AutocompleteLocationDto getAllLocations(String userInput) {

        String url = "https://api.geoapify.com/v1/geocode/autocomplete?text=" +
                userInput +
                "&lang=en&filter=rect:67.99027268866803,7.751702320178893,97.67905450446051,36.24714839883016&bias=rect:67.82485856337212,7.206437410179106,97.75761817798968,35.82356103480063|countrycode:none&format=json&apiKey=b8746026fe2b46cc922e0a636b19efc6";
        RestTemplate restTemplate = new RestTemplate();

        return restTemplate.getForObject(url, AutocompleteLocationDto.class);

    }
}
