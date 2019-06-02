import React, { Component } from 'react';
import '../styles/Content.css'
import '../styles/Experience.css'
import '../styles/AboutMe.css'

export class Content extends Component {


  constructor(props) {
    super(props);
    this.state = {switched: true};
    this.buttonClick = this.buttonClick.bind(this);
    this.experience = "experience_active";
    this.about = "";
  }

  buttonClick(param, e) {
    if(param === "experience"){
      this.setState(state => ({
        switched: true
      }));
      this.experience = "experience_active";
      this.about = "";
    }else if(param === "about"){
      this.setState(state => ({
        switched: false
      }));
      this.about = "about_active";
      this.experience = "";
    }
  }

  render(){
    return(
      <div>
        <div className="content">
          <button className={this.experience + " experience_button"} onClick={(e) => this.buttonClick("experience",e)}>
            Experience
          </button>
          <button className={this.about + " about_button"} onClick={(e) => this.buttonClick("about",e)}>
            About Me
          </button>
        </div>
       <Switch switched={this.state.switched}/>
      </div>
    )
  }
}

function Switch(props){
  const switched = props.switched;
  if(switched){
    return <Experience/>;
  }
  return <AboutMe/>;
}

const Experience = () => {
  return(
    <div>
      <ExperienceCOOP/>
      <hr/>
      <ExperienceRA/>
      <hr/>
      <ExperienceTA/>
    </div>
  )
}

const ExperienceCOOP = () => {
  return(
    <div className="experience_coop_wrapper">
      <span className="title exp_text">
        Software Developer co-op
      </span>
      <br/>
      <span className="date exp_text">
        March 2017 - May 2017
      </span>
        <a className="coop_img" href="https://github.com/GLOBBIMUS/digital-display-garden-iteration-4-sn1999ec" target="_blank" rel="noreferrer noopener">
          <img src={require('../images/coop_pic3.png')} alt="demo" />
        </a>
        <div className="content_text exp_text">
          <ul>
            <li>Developed a visitor feedback system for <a id="wcroc_link" href="https://wcroc.cfans.umn.edu/" target="_blank" rel="noreferrer noopener" aria-hidden="true"> WCROC</a></li>
            <li>Designed and implemented frontend API</li>
            <li>Designed and implemented queries to extract aggregated data from the database</li>
            <br/>
            <li><b>Team size</b>: 6 people</li>
            <li><b>Frontend</b>: Angular 2, TypeScript</li>
            <li><b>Backend</b>: Java, MognoDB</li>
            <li><b>Tools</b>: Gradle, Jasmin, Karma, Travis</li>
          </ul>
        </div>
    </div>
  )
}

const ExperienceRA = () => {
  return(
    <div className="experience_res_assist_wrapper">
      <span className="title exp_text">
        Research Assistant
      </span>
      <br/>
      <span className="date exp_text">
        August 2017 - Present
      </span>

      <div className="content_text exp_text">
        <ul>
          <li>Awarded research position through MAP (Morris Academic Partnership) and UROP (Undergraduate Research Oppoprtunities Program)</li>
          <li>Migrated evolutionary computation ancestry data from Titan graph database to Neo4j graph database</li>
          <li>Developed web-based interactive visualization tool to simplify the data analysis</li>
          <li>Analyzed and experimented with data</li>
        </ul>
      </div>
    </div>
  )
}

const ExperienceTA = () => {
  return(
  <div className="experience_ta_wrapper">
      <span className="title exp_text">
        Teaching Assistant
      </span>
      <br/>
      <span className="date exp_text">
        January 2017 - May 2017
      </span>
        <div className="content_text exp_text">
          <ul>
            <li>Graded homework assignments of 30 students and provided useful feedback for Foundation of Computer Science</li>
          </ul>
        </div>
    </div>
  )
}

const AboutMe = () => {
  return(
    <div className="about_wrapper">
      <div className="about_me_intro ab_text">
        Hello there! <br/> I&#39;m a recent graduate with a Bachelor's degree in Computer Science.
        Currently I am actively looking for software developer position.
        I have a strong passion for software development and solving challenging problems.
      </div>
      <div className="my_knowledge ab_text">
        <ul>
          <li><b>Programming languages</b>: Java, JavaScript/TypeScript, Clojure, Bash</li>
          <li><b>Exposed to</b>: AWS (Lambda, S3, DynamoDB), SpringBoot, C#, C, Python</li>
          <li><b>Web Technologies</b>: Rest, HTML5, CSS3</li>
          <li><b>Libraries/Frameworks</b>: AngularJS/Angular 2, React.js, Node.js, Express, Junit, Jasmine, Karma</li>
          <li><b>Tools</b>: Git, NPM, Travis CI, Gradle, Vim, Atom, IntelliJ, Eclipse</li>
          <li><b>Databases</b>: Neo4j, MySQL/MariaDB, MongoDB</li>
        </ul>
      </div>
      <div className="my_skills">
        <div className="ab_skills_header ab_text">
          My skills:
        </div>
        <div className="icons">
          <div className="pair_prog">
            <img src={require('../images/pair_prog.png')} alt="Pair programming icon" />
            <div className="icon_title ab_text">Pair Programming</div>
          </div>
          <div className="agile_dev">
           <img src={require('../images/agile_development.png')} alt="Agile development icon" />
          <div className="icon_title ab_text">Agile Development</div>
         </div>
         <div className="test_driven_dev">
            <img src={require('../images/test_driven_dev.png')} alt="Test driven development icon" />
          <div className="icon_title ab_text">Test Driven Development</div>
        </div>
        <div className="cont_inter">
            <img src={require('../images/cont_inter.png')} alt="Continuous integration icon" />
          <div className="icon_title ab_text">Continuous Integration</div>
        </div>
        </div>
      </div>
    </div>
  )
}
