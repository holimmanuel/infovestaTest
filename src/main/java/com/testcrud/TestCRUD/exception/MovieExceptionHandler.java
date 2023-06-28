package com.testcrud.TestCRUD.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class MovieExceptionHandler {

    @ExceptionHandler(value = {MovieNotFoundException.class})
    public ResponseEntity<Object> handlerMovieNotFoundException
            (MovieNotFoundException movieNotFoundException){
        MovieException movieException = new MovieException(
                movieNotFoundException.getMessage(),
                movieNotFoundException.getCause(),
                HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(movieException, HttpStatus.NOT_FOUND);
    }

}
