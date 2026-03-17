package com.prediction.backend;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@RestController
@RequestMapping("/predict")
@CrossOrigin(origins = "*")
public class PredictionController {

    // ✅ Render Flask URL
    private final String flaskUrl = "https://ml-api-gu6h.onrender.com";

    private RestTemplate restTemplate = new RestTemplate();


    // ================= STUDENT =================

    @PostMapping("/student")
    public Object student(@RequestBody Map<String, Object> input) {

        Object response = restTemplate.postForObject(
                flaskUrl + "/student",
                input,
                Object.class
        );

        return response;
    }


    // ================= PLACEMENT =================

    @PostMapping("/placement")
    public Object placement(@RequestBody Map<String, Object> input) {

        Object response = restTemplate.postForObject(
                flaskUrl + "/placement",
                input,
                Object.class
        );

        return response;
    }


    // ================= HEALTH =================

    @PostMapping("/health")
    public Object health(@RequestBody Map<String, Object> input) {

        Object response = restTemplate.postForObject(
                flaskUrl + "/health",
                input,
                Object.class
        );

        return response;
    }

}