package com.dell.foodbox.exception;

public class OrderAlreadyCheckoutException extends Exception {

  public OrderAlreadyCheckoutException(String message) {
    super(message);
  }
}
