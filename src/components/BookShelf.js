import React, { Component } from 'react';

class BookShelf extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      bookclubs: []
    };
  }
  
  componentDidMount() {
   fetch('http://one-more-page-nwyll.c9users.io:8080/book_clubs')
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
                <h3>{book.title}</h3>
                <h5><em>By {book.author}</em></h5>
                <p>{book.description}</p>
                <p>Start Date: {book.start}</p>
                <p>End Date: {book.end}</p>
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
