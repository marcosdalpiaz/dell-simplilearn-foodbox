package com.dell.foodbox.exception;

public class OrderAlreadyFinishException extends Exception {

  public OrderAlreadyFinishException(String message) {
    super(message);
  }
}
