package com.testcrud.TestCRUD.service;

import com.testcrud.TestCRUD.exception.MovieNotFoundException;
import com.testcrud.TestCRUD.model.Movie;
import com.testcrud.TestCRUD.repository.MovieRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieImpl implements MovieService{

    MovieRepository movieRepository;

    public MovieImpl(MovieRepository movieRepository){
        this.movieRepository = movieRepository;
    }

    @Override
    public String createMovie(Movie movie){
        this.movieRepository.save(movie);
        return "Sukses Ditambahkan";
    }

    @Override
    public String updateMovie(Movie movie) {
        this.movieRepository.save(movie);
        return "Sukses Dirubah";
    }

    @Override
    public String deleteMovie(String movieId) {
        this.movieRepository.deleteById(movieId);
        return "Sukses Dihapus";
    }

    @Override
    public Movie getMovie(String movieId) {
        if (movieRepository.findById(movieId).isEmpty())
            throw new MovieNotFoundException("Movie Tidak Ditemukan");
        return movieRepository.findById(movieId).get();
    }

    @Override
    public List<Movie> getAllMovie() {
        return movieRepository.findAll();
    }

}
