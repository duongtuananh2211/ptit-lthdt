package phuocvu.org.ecombackendspringboot.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import phuocvu.org.ecombackendspringboot.handler.WebSocketHandler;
import phuocvu.org.ecombackendspringboot.service.ConfigService;
import phuocvu.org.ecombackendspringboot.service.WebsocketService;

@CrossOrigin
@RestController
@RequestMapping("/api/config")
public class ConfigController {
    private final ConfigService configService;
    private final WebsocketService websocketService;

    public ConfigController(ConfigService configService, WebsocketService websocketService) {
        this.configService = configService;
        this.websocketService = websocketService;
    }

    @PutMapping("/visitors")
    public ResponseEntity<Boolean> updateVisitors() {
        configService.incrementVisitors();
        websocketService.sendMessageToAll("nguuu");
        return new ResponseEntity<>(true, HttpStatus.OK);
    }
}
