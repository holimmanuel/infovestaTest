import axios from 'axios';

const MOVIE_BASE_REST_API_URL = 'http://localhost:5434/api/v1/movie';

class MovieService {
  getAllMovie() {
    return axios.get(MOVIE_BASE_REST_API_URL);
  }

  createMovie(movie) {
    return axios.post(MOVIE_BASE_REST_API_URL, movie);
  }

  getMovieById(movieId) {
    return axios.get(MOVIE_BASE_REST_API_URL + '/' + movieId);
  }

  updateMovie(movieId, movie) {
    return axios.put(MOVIE_BASE_REST_API_URL + '/' + movieId, movie);
  }

  deleteMovie(movieId) {
    return axios.delete(MOVIE_BASE_REST_API_URL + '/' + movieId);
  }
}

export default new MovieService();
