package phuocvu.org.ecombackendspringboot.service;

import org.springframework.stereotype.Service;
import phuocvu.org.ecombackendspringboot.handler.WebSocketHandler;

@Service
public class WebsocketService {

    private final WebSocketHandler webSocketHandler;

    public WebsocketService(WebSocketHandler webSocketHandler) {
        this.webSocketHandler = webSocketHandler;
    }

    public void sendMessageToAll(String message) {
        webSocketHandler.broadcast(message);
    }
}
