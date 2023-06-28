import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieService from '../services/MovieService';

const ListEmployeeComponent = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getAllMovie();
  }, []);

  const getAllMovie = () => {
    MovieService.get()
      .then((response) => {
        setMovie(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteMovies = (movieId) => {
    MovieService.deleteMovies(movieId)
      .then((response) => {
        getAllMovie();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center"> List Movie </h2>
      <Link to="/add-movie" className="btn btn-primary mb-2">
        {' '}
        Add Movie{' '}
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <th> Id </th>
          <th> Title </th>
          <th> Director </th>
          <th> Summary </th>
          <th> Genres </th>
          <th> Actions </th>
        </thead>
        <tbody>
          {movie.map((movie) => (
            <tr key={movie.id}>
              <td> {movie.id} </td>
              <td> {movie.title} </td>
              <td>{movie.directory}</td>
              <td>{movie.summery}</td>
              <td>{movie.genres}</td>
              <td>
                <Link className="btn btn-info" to={`/edit-movie/${movie.id}`}>
                  Update
                </Link>
                <button className="btn btn-danger" onClick={() => deleteMovies(movie.id)} style={{ marginLeft: '10px' }}>
                  {' '}
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListMovieComponent;
