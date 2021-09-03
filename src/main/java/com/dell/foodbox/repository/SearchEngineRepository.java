package com.dell.foodbox.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.dell.foodbox.model.SearchEngine;

public interface SearchEngineRepository extends MongoRepository<SearchEngine, String> {

}
