package com.dell.foodbox.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.dell.foodbox.model.Order;

@Repository()
public interface OrderRepository extends MongoRepository<Order, String> {

}
