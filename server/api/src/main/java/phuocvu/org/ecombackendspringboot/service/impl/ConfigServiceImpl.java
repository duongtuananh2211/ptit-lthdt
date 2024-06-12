package phuocvu.org.ecombackendspringboot.service.impl;

import org.springframework.stereotype.Service;
import phuocvu.org.ecombackendspringboot.entity.Config;
import phuocvu.org.ecombackendspringboot.repository.ConfigRepository;
import phuocvu.org.ecombackendspringboot.service.ConfigService;

import java.time.LocalDate;
import java.util.List;

@Service
public class ConfigServiceImpl implements ConfigService {
    private final ConfigRepository configRepository;

    public ConfigServiceImpl(ConfigRepository configRepository) {
        this.configRepository = configRepository;
    }

    @Override
    public void incrementVisitors() {
        List<Config> configs = configRepository.findAll();
        LocalDate currentDate = LocalDate.now();
        int currentYear = currentDate.getYear();
        List<Config> config = configs.stream().filter(o -> o.getYear() == currentYear).toList();
        if (!config.isEmpty()) {
            config.get(0).setVisitors(config.get(0).getVisitors() + 1);
            configRepository.save(config.get(0));
        }
    }
}
