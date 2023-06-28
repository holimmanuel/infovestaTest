import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import AddMovieComponent from './components/AddMovieComponent';
import ListMovieComponent from './components/ListMovieComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ListMovieComponent}></Route>
            <Route path="/movie" component={ListMovieComponent}></Route>
            <Route path="/add-movie" component={AddMovieComponent}></Route>
            <Route path="/edit-movie/:id" component={AddMovieComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
