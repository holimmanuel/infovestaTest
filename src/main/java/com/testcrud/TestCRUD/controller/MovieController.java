package com.testcrud.TestCRUD.controller;

import com.testcrud.TestCRUD.model.Movie;
import com.testcrud.TestCRUD.response.ResponseHandler;
import com.testcrud.TestCRUD.service.MovieService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movie")
public class MovieController {

    MovieService movieService;

    public MovieController(MovieService movieService){
        this.movieService = movieService;
    }

    // Melihat Movie Secara Spesifik
    @GetMapping("{movieId}")
    public ResponseEntity<Object>getMovieDetail(@PathVariable("movie")String movieId){
        return ResponseHandler.responseBuilder("Movie Ditemukan", HttpStatus.OK,movieService.getMovie(movieId));
    }

    // Melihat Movie Secara Keseluruhan
    @GetMapping
    public List<Movie> getAllMovie(){
        return movieService.getAllMovie();
    }

    @PostMapping
    private String tambahMovie(@RequestBody Movie movie){
        movieService.createMovie(movie);
        return "Movie Berhasil Ditambahkan";
    }

    @PutMapping
    private String rubahMovie(@RequestBody Movie movie){
        movieService.updateMovie(movie);
        return "Movie Berhasil Dirubah";
    }

    @DeleteMapping("{movieId}")
    private String hapusMovie(@PathVariable("movieId") String movieId){
        movieService.deleteMovie(movieId);
        return "Movie Berhasil Dihapus";
    }


}
