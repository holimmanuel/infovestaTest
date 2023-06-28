import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import MovieService from '../services/MovieService';

const AddMovieComponent = () => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [summary, setSummary] = useState('');
  const [genres, setGenres] = useState('');
  const history = useHistory();
  const { id } = useParams();

  const saveOrUpdateMovie = (e) => {
    e.preventDefault();

    const movie = { title, director, summary, genres };

    if (id) {
      MovieService.updateMovie(id, movie)
        .then((response) => {
          history.push('/movie');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      MovieService.createMovie(movie)
        .then((response) => {
          console.log(response.data);

          history.push('/movie');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    MovieService.getMovieById(id)
      .then((response) => {
        setTitle(response.data.title);
        setDirector(response.data.director);
        setSummary(response.data.summary);
        setGenres(response.data.genres);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const Movie = () => {
    if (id) {
      return <h2 className="text-center">Update Movie</h2>;
    } else {
      return <h2 className="text-center">Add Movie</h2>;
    }
  };

  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {title()}
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label"> Title :</label>
                  <input type="text" placeholder="Enter title" name="title" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Directory :</label>
                  <input type="text" placeholder="Enter directory" name="directory" className="form-control" value={director} onChange={(e) => setDirector(e.target.value)}></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Summary :</label>
                  <input type="text" placeholder="Enter summary" name="summary" className="form-control" value={summary} onChange={(e) => setSummary(e.target.value)}></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Genres :</label>
                  <input type="text" placeholder="Enter genres" name="genres" className="form-control" value={genres} onChange={(e) => setGenres(e.target.value)}></input>
                </div>

                <button className="btn btn-success" onClick={(e) => saveOrUpdateMovie(e)}>
                  Submit{' '}
                </button>
                <Link to="/movie" className="btn btn-danger">
                  {' '}
                  Cancel{' '}
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMovieComponent;
