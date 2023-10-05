import React from 'react';
import './App.css';
import Header from './container/header/header';
import Footer from './container/footer/footer';


import PieChart from './container/chart/chart';
import TeamPage from './container/team/teampro';
import TeamMember from './container/team/team';
import AboutPage from './container/about/about';
import Home from './container/landingp/landing';
import FeatureCard from './container/features/feature';


function App() {
  return (
    <div className="App">
      <Header/>
      
      <Home/>
      <AboutPage/>
      <FeatureCard/>
      <TeamPage/>
      <PieChart/>
      <Footer/>
    </div>
  );
}

export default App;
