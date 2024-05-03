import React from 'react';
import Layout from '../components/Layout/Layout';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import CSS file
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  // Define the New component
  const New = (
    <Carousel>
      <div>
        <img src="assets/1.jpeg" alt="Slide 1" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="assets/2.jpeg" alt="Slide 2" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="assets/3.jpeg" alt="Slide 3" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );

  // Define the Popular component
  const Popular = (
    <Carousel>
      <div>
        <img src="assets/popular-1.jpeg" alt="Popular Slide 1" />
        <p className="legend">Popular Legend 1</p>
      </div>
      <div>
        <img src="assets/popular-2.jpeg" alt="Popular Slide 2" />
        <p className="legend">Popular Legend 2</p>
      </div>
      <div>
        <img src="assets/popular-3.jpeg" alt="Popular Slide 3" />
        <p className="legend">Popular Legend 3</p>
      </div>
    </Carousel>
  );

  return (
    <Layout>
      <h1>New</h1>
      {New} {/* Render the New component */}
      <h1>Popular</h1>
      {Popular} {/* Render the Popular component */}
    </Layout>
  );
}

export default Home;
