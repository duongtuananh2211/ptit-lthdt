package d23k11.smartstore.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import d23k11.smartstore.payload.collection.CollectionDto;
import d23k11.smartstore.payload.collection.CreateCollectionDto;
import d23k11.smartstore.payload.collection.ResponseCollectionClientDto;
import d23k11.smartstore.payload.collection.ResponseCollectionDto;
import d23k11.smartstore.service.CollectionService;

import java.util.List;

@RequestMapping("/api/collection")
@RestController
public class CollectionController {
    private final CollectionService collectionService;

    public CollectionController(CollectionService collectionService) {
        this.collectionService = collectionService;
    }

    // add collection
    @PostMapping("")
    public ResponseEntity<ResponseCollectionDto> addCollection(@RequestBody CreateCollectionDto collectionDto) {
        ResponseCollectionDto saveCollection = collectionService.addCollection(collectionDto);
        return new ResponseEntity<>(saveCollection, HttpStatus.CREATED);
    }

    // update collection
    @PutMapping("/{id}")
    public ResponseEntity<ResponseCollectionDto> updateCollection(@RequestBody CollectionDto collectionDto, @PathVariable(name = "id") Long id) {
        ResponseCollectionDto updatedCollection = collectionService.updateCollection(collectionDto, id);
        return ResponseEntity.ok(updatedCollection);
    }

    // delete collection
    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCollection(@PathVariable(name = "id") Long id) {
        collectionService.deleteCollection(id);
        return ResponseEntity.ok("collection deleted successfully");
    }

    // get collection by id
    @GetMapping("/{id}")
    public ResponseEntity<ResponseCollectionDto> getCollectionById(@PathVariable(name = "id") Long id) {
        ResponseCollectionDto collectionDto = collectionService.getCollectionById(id);
        return ResponseEntity.ok(collectionDto);
    }

    // get all collection
    @GetMapping("")
    public List<ResponseCollectionDto> getAllCollection() {
        return collectionService.getAllCollection();
    }

    @GetMapping("/user/{type}")
    public ResponseEntity<ResponseCollectionClientDto> getCollectionsByType(@PathVariable(name = "type") String type) {
        return ResponseEntity.ok(collectionService.getCollectionsByType(type));
    }
}
