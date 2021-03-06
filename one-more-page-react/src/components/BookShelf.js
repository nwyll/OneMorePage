import React, { Component } from 'react';
import './BookShelf.css';

class BookShelf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookclubs: []
    };
  }

  componentDidMount() {
   fetch('http://localhost:8080/book_clubs')
   .then(data => {
     return data.json();
   }).then(data => {
     this.setState({ bookclubs: data});
   })
  }

  render () {
    return (
      <section className="book-shelf">
        <section className="current-clubs">
          <h2>This Month's Book Clubs</h2>
          {this.state.bookclubs.map((book) => {
            return (
              <div className="tile" key={book.id}>
                <h2>{book.title}</h2>
                <h4><em>By {book.author}</em></h4>
                <p>Start Date: {book.start}</p>
                <p>End Date: {book.end}</p>
                <button>Join</button>
              </div>
            )
          })}
        </section>
        <section className="upcoming-clubs">
          <h2>Next Month's Book Clubs</h2>
        </section>
        <section className="past-clubs">
          <h2>Past Book Clubs</h2>
        </section>
      </section>
    );
  }
}

export default BookShelf;
