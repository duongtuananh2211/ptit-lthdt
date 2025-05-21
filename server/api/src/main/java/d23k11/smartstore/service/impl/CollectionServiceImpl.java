package d23k11.smartstore.service.impl;


import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import d23k11.smartstore.entity.CollectionItem;
import d23k11.smartstore.exception.ResourceNotFoundException;
import d23k11.smartstore.entity.Collection;
import d23k11.smartstore.payload.collection.*;
import d23k11.smartstore.repository.collection.CollectionItemRepository;
import d23k11.smartstore.repository.collection.CollectionRepository;
import d23k11.smartstore.service.CollectionService;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CollectionServiceImpl implements CollectionService {
    private final CollectionRepository collectionRepository;
    private final CollectionItemRepository collectionItemRepository;
    private final ModelMapper mapper;

    public CollectionServiceImpl(CollectionRepository collectionRepository, CollectionItemRepository collectionItemRepository, ModelMapper mapper) {
        this.collectionRepository = collectionRepository;
        this.collectionItemRepository = collectionItemRepository;
        this.mapper = mapper;
    }

    @Override
    public ResponseCollectionClientDto getCollectionsByType(String type) {
        Collection collection = collectionRepository.findByType(type);
        return mapper.map(collection, ResponseCollectionClientDto.class);
    }

    @Override
    public ResponseCollectionDto addCollection(CreateCollectionDto createCollectionDto) {
        Collection collection = mapper.map(createCollectionDto, Collection.class);
        Collection saveCollection = collectionRepository.save(collection);
        for (ProductInCollectionItem p : createCollectionDto.getProducts()) {
            CollectionItem collectionItem = mapper.map(new CollectionItemDto(saveCollection.getId(), p.getProductId()), CollectionItem.class);
            collectionItemRepository.save(collectionItem);
        }
        return mapper.map(saveCollection, ResponseCollectionDto.class);
    }

    @Override
    public ResponseCollectionDto updateCollection(CollectionDto collectionDto, Long collectionId) {
        Collection existCollection = collectionRepository.findById(collectionId)
                .orElseThrow(() -> new ResourceNotFoundException("collection", "id", collectionId));
        mapper.map(collectionDto, existCollection);
        Collection saveCollection = collectionRepository.save(existCollection);
        return mapper.map(saveCollection, ResponseCollectionDto.class);
    }

    @Override
    public void deleteCollection(Long collectionId) {
        Collection existCollection = collectionRepository.findById(collectionId)
                .orElseThrow(() -> new ResourceNotFoundException("collection", "id", collectionId));
        collectionRepository.delete(existCollection);
    }

    @Override
    public ResponseCollectionDto getCollectionById(Long collectionId) {
        Collection collection = collectionRepository.findById(collectionId)
                .orElseThrow(() -> new ResourceNotFoundException("collection", "id", collectionId));
        return mapper.map(collection, ResponseCollectionDto.class);
    }

    @Override
    public List<ResponseCollectionDto> getAllCollection() {
        List<Collection> collections = collectionRepository.findAll();
        return collections.stream().map((collection) -> mapper.map(collection, ResponseCollectionDto.class)).collect(Collectors.toList());
    }
}
