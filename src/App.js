import './App.css';
import ChangeModeButton from './ChangeModeButton';
import FeaturedProjects from './FeaturedProjects';
import Header from './Header';
import Interests from './Interests';
import NavBar from './NavBar';
import ScrollTopButton from './ScrollTopButton';
import TimeLine from './TimeLine';

export const App = () => {
  return (
    <>
      <NavBar/>
      <Header/> 
      <TimeLine/>
      <FeaturedProjects/>
      <Interests/>
      <ChangeModeButton/>
      <ScrollTopButton/>
    </>
  )
};

export default App;
