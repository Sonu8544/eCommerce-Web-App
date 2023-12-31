import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from './../components/Popular/Popular';
import Offers from '../components/Offers/Offers';
import NewCollections from '../components/NewCollections/NewCollections';
import NewsLetter from '../components/Newsletter/NewsLetter';
import Footer from '../components/Footer/Footer';

const Shop = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default Shop