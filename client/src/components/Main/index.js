import React, {Component} from 'react';
import $ from 'jquery';



class Main extends Component {

    

    render() {
        $("#btn-submit").on("click", () => {
            // e.preventDefault();
            
            const name = $("#name").val().trim();
            const message = $("#message").val().trim();
        
            const data = {
              name,
              message,
            };
        
            $.post('/', data, () => {
        
              // show alert
             document.querySelector(".alert").style.display = "block" ;
          
          // hide alert after four seconds
             setTimeout(()=>{
             document.querySelector(".alert").style.display = "none" ;
             },4000);

            });
        
            });
            
        return (
            <>
            
            <div className="portfolio-container section-container w-100 p-3 " id="portfolio">
          <div className="container">
            <img id="photo" src="/images/hdshot.jpg" alt="dennis" className="center" />
            <h1 id="header">- Dennis Itua -</h1>
            <h5 id="header1">Full Stack Web Developer</h5>   
            <p id="header3">Proficient in Computer Science applied to JavaScript, Databases (MySQL, MongoDB, "Docker-Containerized"). Server Side Development (Node.js, Express, MERN Stack). Browser Based Technologies (HTML, CSS, Bootstrap, JavaScript, jQuery, React). Deployment (Heroku, Git). Quality Assurance (Writing Tests) </p>
              <a id="contact-me" className="center" href="/images/dennisituaupdatedresume.pdf">VIEW RESUME</a>    
          </div>
      </div>

      <div className="about-container section-container w-100 p-3 d-inline-block" id="about">
          <div className="container">
            <div className="row">

                <div className="col-md-3"></div>

              <div className="col-md-6">
                  <h2 className="header">About </h2>
                    
              <p className="paragraph">
                I'm a fast learner, hard worker and team player who is proficient in an array of scripting languages and multimedia web tools.
            </p>

                <p className="paragraph">
                I'm Skilled at writing well-designed, testable and efficient code using current best practices in web development. 
              </p>  
  
              <p className="paragraph">
                I'm a full Stack web developer able to build a web presence from the ground up - from Front End concept, navigation, layout and programming to Back End.
              </p>
  
              <p className="paragraph">
                I'm highly skilled and dependable Software Developer with a strong technical background seeking an opportunity to utilize my skills to foster advancement and boost productivity in a growing company. 
                <br />
                Please Kindly Email Me @ dennis.itua1@gmail.com<a className="fa fa-envelope" href="mailto:dennis.itua1@gmail.com" id="emails"></a> or leave a message in the feedback section. 
              </p>
              </div>
              <div className="col-md-3"></div>       
            </div>
          </div>
        </div>


        <div className="projects-container section-container w-100 p-4" id="projects">
          <div className="container">
            <h2 className="header" id="pj">Projects</h2>

            <div className="row">
            
                <div className="col-md-4">
                  <h6 className="cardhead">DPD Movies</h6>
                    
                          <div className="card">
                          <img src="/images/grafity.photo.jpg" className="card-img-top" alt="pddmovies" />
                          <div className="card-body"> 
                          </div>
                      
                          <div className="card-back">
                              <div className="card-body">
                                  <h5 className="card-title"><a href="https://github.com/Dennis-The14th-web/DPD-Movies"><small>DPD Movies Repo Link</small></a></h5>
                                  <p className="card-text"><small><b>Note:</b><br /> Link must be underlined in blue color to get to the directory.</small><br /><b><a href="https://pddmovieappthe14web.herokuapp.com/"><small>Click here for deployed app link</small></a></b></p>
                              </div>
                              </div>
                          </div>
                    
                      </div> 
            
                      <div className="col-md-4">
                        <h6 className="cardhead">RANDOM TRIVIA APP</h6>
                             
                                  <div className="card">
                                  <img src="/images/Quiz-question.photo.jpg" className="card-img-top" alt="TriviaGame" />
                                  <div className="card-body">
                                  </div>
                              
                              
                                  <div className="card-back">
                                      <div className="card-body">
                                          <h5 className="card-title"><a href="https://github.com/Dennis-The14th-web/TriviaGame"><small>Trivia Game Repo Link</small></a></h5>
                                          <p className="card-text"><small><b>Note:</b><br /> Link must be underlined in blue color to get to the directory.</small><b>
                                                  <br /><a href="https://dennis-the14th-web.github.io/TriviaGame/"><small>Click here for deployed app link</small></a></b></p>
                                      </div>
                                      </div>
                                  </div>
                             
                          </div> 
            
                          <div className="col-md-4">
                            <h6 className="cardhead">CLICKY REACT APP</h6>
                                  
                                      <div className="card">
                                      <img src="/images/clickyreact.photo.jpg" className="card-img-top" alt="Clickers-React" />
                                      <div className="card-body">    
                                      </div>
                                 
                                  
                                      <div className="card-back">
                                          <div className="card-body">
                                              <h5 className="card-title"><a href="https://github.com/Dennis-The14th-web/clickers-react"><small>Clickers-React Repo Link</small></a></h5>
                                              <p className="card-text"><small><b>Note:</b><br/> Link must be underlined in blue color to get to the directory.</small><br/><b><a href="https://dennis-the14th-web.github.io/clickers-react/"><small>Clink here for deployed app link</small></a></b></p>
                                          </div>
                                          </div>
                                      </div>
                                  
                              </div> 
            </div>
            
            
            <div className="row">
              <div className="col-md-4">
                <h6 className="cardhead">TRAIN SCHEDULER APP</h6>
                      
                          <div className="card">
                          <img src="/images/databaseimage.photo.jpg" className="card-img-top" alt="TrainScheduler" />
                          <div className="card-body">     
                          </div>
                     
                      
                          <div className="card-back">
                              <div className="card-body">
                                  <h5 className="card-title"><a href="https://github.com/Dennis-The14th-web/Train-Scheduler"><small>Train-Scheduler Repo Link</small></a></h5>
                                  <p className="card-text"><small><b>Note:</b><br/> Link must be underlined in blue color to get to the directory.</small><br/><b><a href="https://dennis-the14th-web.github.io/Train-Scheduler/"><small>Click here for deployed app link</small></a></b></p>
                              </div>
                              </div>
                          </div>
                      
                  </div>
            
                  <div className="col-md-4">
                          <h6 className="cardhead"><strong> gifKOLECTIONS APP </strong></h6>
                          
                          <div className="card">
                          <img src="/images/giphycover.gif" className="card-img-top" alt="giphy cover" />
                          <div className="card-body">
                          </div>   
                      

                          <div className="card-back">
                              <div className="card-body">
                                  <h5 className="card-title"><a href="https://github.com/Dennis-The14th-web/GifTastic"><small>gifKOLECTIONS Repo Link</small></a></h5>
                                  <p className="card-text"><small><b>Note:</b><br/>Link must be underlined in blue color to get to the directory.</small><b><br/><a href="https://dennis-the14th-web.github.io/GifTastic/"><small>Click here for deployed app link</small></a></b></p>
                              </div>
                              </div>
                          </div>
                  </div> 
                    
                  <div className="col-md-4">
                    <h6 className="cardhead">BURGER RESTAURANT APP</h6>
                      
                          <div className="card">
                          <img src="/images/09burner1-articleLarge.jpg" className="card-img-top" alt="Burgers" />
                          <div className="card-body">       
                          </div>
                      
                          <div className="card-back">
                              <div className="card-body">
                                  <h5 className="card-title"><a href="https://github.com/Dennis-The14th-web/burger"><small>Burgers Repo Link</small></a></h5>
                                  <p className="card-text"><small><b>Note:</b><br/> Link must be underlined in blue color to get to the directory.</small><br/><b><a href="https://the14thweb-burger.herokuapp.com/"><small>Click here for deployed app link</small></a></b></p>
                              </div>
                              </div>
                          </div>
                     
                    </div>
             
            </div> 
           
      </div>
    </div>

    </>

        );
    };
}

export default Main;