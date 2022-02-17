import React, { Component } from 'react';
import {TextPic} from './TextPic.js';
import {Content} from './Content.js';
import '../styles/Main.css';
import '../styles/Header.css';

class Main extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <Header/>
          <Content/>
          <hr/>
          <Copyright/>
      </div>
    </div>
    );
  }
}

const Header = () => {
  return(
    <div className="header">
      <div className="avatar">
        <TextPic/>
      </div>
      <div className="text_">
        Shawn Saliyev <br/>
      Software <span id="coder">&lt;developer&gt;</span><p/>
      </div>
      <div className="contacts">
        <a className="contact_icon" href="https://github.com/globbycodes" target="_blank" rel="noreferrer noopener" aria-hidden="true">
          <i className="fab fa-github"></i>
        </a>
        <a className="contact_icon" href="https://www.linkedin.com/in/shawn-saliyev" target="_blank" rel="noreferrer noopener" aria-hidden="true">
          <i className="fab fa-linkedin"></i>
        </a>
        <a className="contact_icon" href="mailto:shawnsaliyev@gmail.com" aria-hidden="true">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  )
}

const Copyright = () => {
  return(
    <div className="copyright">
      Made with <i className="fas fa-heart"></i> by Shawn Saliyev
    </div>
  )
}
export default Main;
