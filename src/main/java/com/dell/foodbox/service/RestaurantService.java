package com.dell.foodbox.service;

import java.util.List;

import com.dell.foodbox.model.Comment;
import com.dell.foodbox.model.Dish;
import com.dell.foodbox.model.Restaurant;
import com.dell.foodbox.model.RestaurantInfo;

public interface RestaurantService {

  int addDish(String id, Dish dish);

  int removeDish(String id, Dish dish);

  List<Dish> getAllDishes(String id);

  RestaurantInfo getInformation(String id);

  int updateInfo(String id, RestaurantInfo info);
}
