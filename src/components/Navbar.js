import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

export default class Navigation extends React.Component {
  createElem(type, url) {
    const link = document.createElement(type);
    link.href = url;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }

  componentDidMount() {
    this.createElem("link", "/css/style.css");
    this.createElem("link", "/vendor/bootstrap/css/bootstrap.min.css");
  }

  render() {
    return (
      <Router>
        <>
          <div className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <Link to="/" className="navbar-brand">Lukman</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav">
                  <Link to="/" className="nav-link">Home</Link>
                  <Link to="/about" className="nav-link">About</Link>
                  <Link to="/projects" className="nav-link">Projects</Link>
                  <Link to="/contact" className="nav-link">Contact</Link>
                </div>
              </div>
            </div>
          </div>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>

        </>
      </Router>
    );
  }
}