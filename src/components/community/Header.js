import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div>
          <nav className="navbar is-light is-fixed-top has-shadow">
              <div className="navbar-brand">
                  <Link to="/welcome" className="navbar-item">
                      <strong>Airbnb Insider</strong>
                  </Link>
                  <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                      <span></span>
                      <span></span>
                      <span></span>
                  </div>
              </div>
              <div className="navbar-menu is-right">
                  <div className="navbar-start">
                  </div>
                  <div className="navbar-end">
                      <div className="navbar-item">
                          <div className="field is-grouped">
                              <Link to="/welcome" className="navbar-item">Home</Link>
                              <Link to="/" className="navbar-item">Map</Link>
                              <Link to="/about" className = "navbar-item">About</Link>
                              <Link to="/community" className = "navbar-item">Community</Link>
                          </div>
                      </div>
                  </div>
              </div>
          </nav>
      </div>
    );
  }
}

export default Header;
// <header style={{fontSize: '2em'}}>
//   <h1>Community</h1>
// </header>
