package d23k11.smartstore.service;

import d23k11.smartstore.payload.collection.CollectionDto;
import d23k11.smartstore.payload.collection.CreateCollectionDto;
import d23k11.smartstore.payload.collection.ResponseCollectionClientDto;
import d23k11.smartstore.payload.collection.ResponseCollectionDto;

import java.util.List;

public interface CollectionService {
    ResponseCollectionClientDto getCollectionsByType(String type);
    ResponseCollectionDto addCollection(CreateCollectionDto createCollectionDto);

    ResponseCollectionDto updateCollection(CollectionDto collectionDto, Long id);

    void deleteCollection(Long id);

    ResponseCollectionDto getCollectionById(Long id);

    List<ResponseCollectionDto> getAllCollection();
}
