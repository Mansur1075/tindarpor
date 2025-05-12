import React from 'react'
import Menu from "../../menu/Menu";
import Banner from '../banner/Banner';
import Company from '../Company/Company';
import { Nav } from 'react-bootstrap';
import Pricing from '../../Pricing/Pricing';





const Home = () => {
  return (
    <> 
    <Menu/>
    <Banner/>
    <Company/>
    <Pricing/>
    
    </>
  )
}

export default Home