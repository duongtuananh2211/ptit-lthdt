package phuocvu.org.ecombackendspringboot.exception;

import lombok.Getter;
import org.apache.logging.log4j.message.StringFormattedMessage;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@Getter
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {

    public ResourceNotFoundException(String resourceName, String fieldName, long fieldValue) {
        super("%s not found with %s : '%s'".formatted(resourceName, fieldName, fieldValue));
    }
}
