import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from "./components/Footer";
import Navigation from "./components/Navbar";

import HomePage from "./pages/home";
import EducationPage from "./pages/education";
import ProjectsPage from "./pages/projects";
import AboutMePage from "./pages/aboutme";
import ExperiencePage from "./pages/experience";
import BackgroundVideo from "./components/BackgroundVideo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "MC Nguyen's Portfolio",
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Projects', path: '/projects'},
        {title: 'Education', path: '/education'},
        {title: 'Experience', path: '/experience'},
      ],
      home: {
        title: "Marvin-Calvin Quangvy Nguyen",
        subtitle: "Main Projects made me decide a path"
      },
      about: {
        title: 'About Me',
      },
      projects: {
        title: 'Projects during School',
      },
      education: {
        title: 'Colleges/Universities',
      },
      experience: {
        title: 'Non-major Experience',
      },
    };
  }

  render() {
    return (
        <Router>
          <Container className="p-0" fluid={true}>

              <Navigation/>
              <BackgroundVideo/>
              <Route path="/"
                     exact
                     render={() => <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle}/> }/>
              <Route path="/education"
                     exact
                     render={() => <EducationPage title={this.state.education.title}/> }/>
              <Route path="/projects"
                     exact
                     render={() => <ProjectsPage title={this.state.projects.title}/> }/>
              <Route path="/about"
                     exact
                     render={() => <AboutMePage title={this.state.about.title}/> }/>
              <Route path="/experience"
                     exact
                     render={() => <ExperiencePage title={this.state.experience.title}/> }/>
              <Footer/>

          </Container>
        </Router>
    );
  }
}

export default App;
