package com.testcrud.TestCRUD.service;

import com.testcrud.TestCRUD.model.Movie;

import java.util.List;

public interface MovieService {

    public String createMovie(Movie movie);
    public String updateMovie(Movie movie);
    public String deleteMovie(String movieId);
    public Movie getMovie(String movieId);
    public List <Movie> getAllMovie();
}
