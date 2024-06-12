package phuocvu.org.ecombackendspringboot.service;

import phuocvu.org.ecombackendspringboot.payload.collection.CollectionDto;
import phuocvu.org.ecombackendspringboot.payload.collection.CreateCollectionDto;
import phuocvu.org.ecombackendspringboot.payload.collection.ResponseCollectionClientDto;
import phuocvu.org.ecombackendspringboot.payload.collection.ResponseCollectionDto;

import java.util.List;

public interface CollectionService {
    ResponseCollectionClientDto getCollectionsByType(String type);
    ResponseCollectionDto addCollection(CreateCollectionDto createCollectionDto);

    ResponseCollectionDto updateCollection(CollectionDto collectionDto, Long id);

    void deleteCollection(Long id);

    ResponseCollectionDto getCollectionById(Long id);

    List<ResponseCollectionDto> getAllCollection();
}
