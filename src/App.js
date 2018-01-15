import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import BookShelf from './components/BookShelf';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>One More Page</h1>
          <nav>
            <Link to='/'>Landing</Link>
            <Link to='/bookshelf'>Book Shelf</Link>
          </nav>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/bookshelf" component={BookShelf} />
        </main>
      </div>
    );
  }
}

export default App;
