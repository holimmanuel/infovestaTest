package com.testcrud.TestCRUD.exception;

import org.springframework.http.HttpStatus;

public class MovieException {

    private final String message;
    private final Throwable throwble;
    private final HttpStatus httpStatus;

    public MovieException (String message, Throwable throwble, HttpStatus httpStatus){
        this.message = message;
        this.throwble = throwble;
        this.httpStatus = httpStatus;
    }
}
