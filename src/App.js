import React from 'react';
import Navigation from './components/Navbar';

class App extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "/vendor/bootstrap/js/bootstrap.bundle.min.js";
    document.body.appendChild(script);
  }

  render() {
    return (
      <Navigation />
    );
  }
}

export default App;