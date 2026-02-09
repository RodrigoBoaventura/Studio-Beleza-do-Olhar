import React from 'react';
import { Helmet } from 'react-helmet';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Studio Beleza do Olhar</title>
      </Helmet>

      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
