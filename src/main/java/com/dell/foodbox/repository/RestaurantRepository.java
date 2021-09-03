package com.dell.foodbox.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.dell.foodbox.model.Restaurant;

@Repository
public interface RestaurantRepository extends MongoRepository<Restaurant, String> {

}
