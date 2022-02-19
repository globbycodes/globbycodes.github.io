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
      <ProfessionalExperience/>
      <hr/>
      <ExperiencePersonalProject/>
      <hr/>
      <ExperienceCOOP/>
      <hr/>
      <ExperienceRA/>
      <hr/>
      <ExperienceTA/>
    </div>
  )
}

const ProfessionalExperience = () => {
  return(
    <div className="professional_experience_wrapper">
      <span className="exp_text title">
        Software Developer at Code Technology
      </span>
      <span className="exp_date">
        September 2019 - Present
      </span>
      <br/>
      <div className="professional_exp_text exp_text">
        <ul>
          <li><b>Owned</b> back-end work from concept to completion for a new dynamic reporting tool that allows a customer success team to gather and evaluate the self reported patient outcomes data in one place and provide results to clients.</li>
          <li><b>Rebuilt</b> the back-end code base that is responsible for loading assessments, making it possible to load them in any language instead of just two.</li>
          <li><b>Improved</b> the back-end logic to overcome previous performance constraints which prevented displaying results of complex queries in the UI.  Changes shortened load times by 50%. Achieved the performance boost by using more efficient ways of pulling data from the SQL database and utilizing summary tables.</li>
          <li><b>Upgraded</b> the continuous integration server through several versions of Ubuntu using Ansible and Bash. Reimplemented the scripts for backing up and restoring the server's configurations, making it easy to rotate the server when updates are made. This upgrade was necessary for maintaining a secured web infrastructure.</li>
          <li><b>Upgraded</b> static data visualization tools to dynamic graphics solution using React.js</li>
          <li><b>Maintained</b> and <b>debugged</b> the AWS Glue jobs for the ETL process. Validated that the data is consistent between our system and the data warehouse.</li>
        </ul>
      </div>
    </div>
  )
}

const ExperiencePersonalProject = () => {
  return(
    <div className="experience_project_wrapper">
      <span className="projectTitle exp_text">
        Recipe Finder
      </span>
      <span className="exp_date">
        June 2019
      </span>
      <br/>
      <a className="project_img" href="https://globbycodes.github.io/recipe-finder" target="_blank" rel="noreferrer noopener">
        <img className="project_img_src" src={require('../images/demo.gif')} alt="demo" />
      </a>
      <div className="projectContent_text exp_text">
        <ul>
          <li>Designed and implemented a web app that allows users to easily find recipes for both meals and cocktails</li>
          <br/>
          <li><b>Frontend</b>: React.js, Redux.js, Bootstrap</li>
          <li><b>Open API</b>: <a id="wcroc_link" href="https://www.themealdb.com/" target="_blank" rel="noreferrer noopener" aria-hidden="true"> TheMealDB, </a>
          <a id="wcroc_link" href="https://www.themealdb.com/" target="_blank" rel="noreferrer noopener" aria-hidden="true"> TheCocktailDB </a>
        </li>
        <li><b>Published via Github Pages</b>: <a id="wcroc_link" href="https://globbycodes.github.io/recipe-finder" target="_blank" rel="noreferrer noopener" aria-hidden="true"> Recipe-Finder</a></li>
        <br/>
        <li><a id="wcroc_link" href="https://github.com/globbycodes/recipe-finder" target="_blank" rel="noreferrer noopener" aria-hidden="true"> Source Code </a></li>
      </ul>
    </div>
  </div>
)
}

const ExperienceCOOP = () => {
  return(
    <div className="experience_coop_wrapper">
      <span className="title exp_text">
        Software Developer co-op
      </span>
      <span className="exp_date">
        August 2017 - December 2017
      </span>
      <br/>
      <a className="coop_img" href="https://github.com/globbycodes/digital-display-garden-iteration-4-sn1999ec" target="_blank" rel="noreferrer noopener">
        <img className="coop_img_src" src={require('../images/coop_pic3.png')} alt="demo" />
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
          <br/>
          <li><a id="wcroc_link" href="https://github.com/globbycodes/digital-display-garden-iteration-4-sn1999ec" target="_blank" rel="noreferrer noopener" aria-hidden="true"> Source Code </a></li>
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
      <span className="exp_date">
        August 2017 - September 2019
      </span>
      <br/>

      <div className="content_text exp_text">
      <div className="exp_descrp">Awarded research positions through MAP (Morris Academic Partnership) and UROP (Undergraduate Research Opportunities Program). Worked with the professor on collecting, analyzing, and visualizing the ancestries in evolutionary computation runs.</div>
        <ul>
          <li>Migrated evolutionary computation ancestry data from <b>Titan</b> graph database to <b>Neo4j</b> graph database</li>
          <li>Developed web-based interactive visualization tool to simplify the data analysis</li>
          <li>Presented a publication at the Midwest Instruction and Computing Symposium. <a href="https://github.com/globbycodes/Papers/blob/main/papers/Rerunning_the_Course_of_Evolutionary_Computation.pdf" target="_blank" rel="noreferrer noopener">Link to paper</a></li>
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
      <span className="exp_date">
        January 2017 - August 2017
      </span>
      <br/>
      <div className="content_text exp_text">
        <ul>
          <li>Graded homework of 30 students, provided useful feedback and assisted students with their coursework. <br/>Class Name - Foundation of Computer Science.</li>
        </ul>
      </div>
    </div>
  )
}

const AboutMe = () => {
  return(
    <div className="about_wrapper">
      <div className="about_me_intro ab_text">
        Hello there! <br/>
        I am a Software Developer with 3 years of experience, skilled in Java, Groovy, Javascript and SQL.
        I have experience working within small teams, and wearing many technical, and product hats. 
        I have also worked on various Front-End and Back-End projects and am currently diving into Dev-Ops using Ansible and AWS.
      </div>
        <div className="ab_skills_header ab_text">
          Skills:
        </div>
        <div className="my_knowledge ab_text">
        {/* <ul>
          <li><b>Programming languages</b>: Java, Groovy, JavaScript, Bash, Python, Rust</li>
          <li><b>Databases</b>: SQL (MySQL, MariaDB, AuroraDB), Neo4j, MongoDB</li>
          <li><b>Dev Ops</b>: Ansible, AWS (EC2, S3, Glue, RedShift), Jenkins</li>
          <li><b>Libraries/Frameworks</b>: <i><b>Back-End:</b></i> Grails, Express, Node.js <i><b>Front-End:</b></i> React, Angular, jQuery</li>
          <li><b>Tools</b>: VSCode, IntelliJ, Vim, Git, NPM, Travis, Gradle, Power BI</li>
        </ul> */}
         <b>Programming languages</b>: Java, Groovy, JavaScript, Bash, Python, Rust<br/>
         <b>Databases</b>: SQL (MySQL, MariaDB, AuroraDB), Neo4j, MongoDB<br/>
         <b>Dev Ops</b>: Ansible, AWS (EC2, S3, Glue, RedShift), Jenkins<br/>
         <b>Libraries/Frameworks</b>: <i><b>Back-End:</b></i> Grails, Express, Node<br/>
         <b>Tools</b>: VSCode, IntelliJ, Vim, Git, NPM, Travis, Gradle, Power BI<br/>
      </div>
      <div className="my_skills">
        {/* <div className="ab_skills_header ab_text">
          My skills:
        </div> */}
        <div className="icons">
          {/* <div className="pair_prog">
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
          </div> */}
        </div>
      </div>
    </div>
  )
}
