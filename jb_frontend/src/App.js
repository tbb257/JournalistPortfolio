import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import YouAre from './components/YouAre';
import Warnings from './components/Warnings';
import Stories from './components/Stories';
import TrackingImpact from './components/TrackingImpact';
import Awards from './components/Awards';
import Podcasts from './components/Podcasts';
import Footer from './components/Footer';
import { useRef } from "react";
import "./styles/Hero.css"

function App() {
    const JohanaBhuiyan = useRef(null);
    const AboutMe = useRef(null);
    const WhoYouAre = useRef(null);
    const BeforeYouReachOut = useRef(null);
    const InvestigativeStories = useRef(null);
    const ArticleTracking = useRef(null);
    const Podcast = useRef(null);
    const Award = useRef(null)

    const scrollToSection = (elementRef) =>{
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior:"smooth",
        });
    }

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
            <div className="sidenav">
                <h1 onClick={() => scrollToSection(JohanaBhuiyan)} className="HeroName">Johana Bhuiyan</h1>
                <h2 onClick={() => scrollToSection(AboutMe)} className="navText" >About Me</h2>
                <h2 onClick={() => scrollToSection(WhoYouAre)} className="navText" >If you're here...</h2>
                <h2 onClick={() => scrollToSection(BeforeYouReachOut)} className="navText" >Before you reach out</h2>
                <h2 onClick={() => scrollToSection(InvestigativeStories)} className="navText" >Investigative Stories</h2>
                <h2 onClick={() => scrollToSection(ArticleTracking)} className="navText" >Tracking Impact</h2>
                <h2 onClick={() => scrollToSection(Award)} className="navText" >Awards</h2>
                <h2 onClick={() => scrollToSection(Podcast)} className="navText" >Podcasts & Interviews</h2>
                <h2 className="LinkedIn"><a className="URL" href="https://www.linkedin.com/in/johana-bhuiyan-95a02a30/" target="_blank">LinkedIn</a></h2>
                <h2 className="Twitter"> <a className="URL" href="https://twitter.com/JMBooyah" target="_blank">Twitter</a></h2>
            </div>
        </nav>

        <div ref={JohanaBhuiyan}>
          <Home/>
        </div>
        <div ref={AboutMe}>
          <About/>
        </div>
        <div ref={WhoYouAre}>
          <YouAre/>
        </div>
        <div ref={BeforeYouReachOut}>
          <Warnings/>
        </div>
        <div ref={InvestigativeStories}>
          <Stories/>
        </div>
        <div ref={ArticleTracking}>
          <TrackingImpact/>
        </div>
        <div ref={Award}>
        <Awards/>
        </div>
        <div ref={Podcast}>
        <Podcasts/>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
