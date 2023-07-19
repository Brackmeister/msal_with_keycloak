package com.example.backend.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping(value = "/api")
class TestController {

    Logger logger = LoggerFactory.getLogger(TestController.class);

    @GetMapping
    public void checkAuth(Principal principal) {
        logger.info("Got called by " + principal.getName());
    }
}