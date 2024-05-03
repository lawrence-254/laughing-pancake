import React from 'react'
import Layout from '../components/Layout'
import Carousel from '../components/Carousel'


const Home = () => {
  return (
    <div>
        <Layout {...<Carousel/>}/>
    </div>
  )
}

export default Home