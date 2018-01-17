import React from 'react';

const Landing = () => (
  <section className="landing">
    <section className="how-it-works">
      {/* background-banner */}
      <h2><em>Just one more page ...</em></h2>
      <p>One More page is a book club application dedicated to young adult novels.</p>
      <p>Here you can connect with fellow YA devotees and discuss your favorite books.</p>
      <p>Create a free account!</p>
      <button>Sign Up</button>
    </section>
    <section className="current-clubs">
      <h2>Check out our current book clubs</h2>
      <img src="\assets\cover_art\these_broken_stars.jpg" alt="These Broken Stars" width="300" height="453" />
      <img src="\assets\cover_art\six_of_crows.jpg" alt="Six of Crows" width="300" height="453" />
      <img src="\assets\cover_art\vice&virtue.jpg" alt="The Gentleman's Guide To Vice and Virtue" width="300" height="453" />
    </section>
    <section className="selling-points">
      <div className="selling-point">
        <h2 className="point-title">Discover your next favorite book.</h2>
        <p className="point-description">Choose from our carefully curated monthly book clubs to join and discuss with fellow YA book lovers.</p>
        <img src="\assets\backgrounds\books_in_black&white.jpg" alt="Books in black & white" width="600" height="600" />
      </div>
      <div className="selling-point">
        <h2 className="point-title">Create your own book club.</h2>
        <p className="point-description">Premium members can create private book clubs. You select the book and invite your friends to join in on the conversation.</p>
        <img src="\assets\backgrounds\lady_midnight_on_shelf.jpg" alt="Lady Midnight" width="600" height="600" />
      </div>
    </section>
  </section>
);

 export default Landing;
