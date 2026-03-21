import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ChangeModeButton from './ChangeModeButton';
import FeaturedProjects from './FeaturedProjects';
import Footer from './Footer';
import Header from './Header';
import Interests from './Interests';
import NavBar from './NavBar';
import ScrollTopButton from './ScrollTopButton';
import TimeLine from './TimeLine';

export const App = () => {
  const mode = useSelector((state) => state.mode);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => AOS.refresh(), 100);
  }, [mode]);

  return (
    <>
      <NavBar/>
      <Header/>
      <TimeLine/>
      <FeaturedProjects/>
      <Interests/>
      <Footer/>
      <ChangeModeButton/>
      <ScrollTopButton/>
    </>
  );
};

export default App;
