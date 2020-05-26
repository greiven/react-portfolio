import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Skills from './skills';
import { ListItemContent, ListItem } from 'react-mdl';






class Aboutme extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={3}>
            <div style={{textAlign: 'center'}}>
            <img 
             src="https://greiven.github.io/Portfolio3/assets/images/grephoto.jpg"
             alt="avatar"
             style={{height: '230px'} }
              />

                 
            </div>
            
            <h2 style={{paddingTop: '0.5em'}}><p1>Greiven Badilla</p1></h2>
            <hr style={{borderTop: '3px solid #cccccc', width: '100%'}}/>
          </Cell>
          <Cell className="aboutme-right-col" col={9}>
            <h2>  Full stack web developer </h2>
                                          
           <div className="education">
            <h5>I'm currently completing a certification in Full Stack Web Development from the University of Washington.</h5>
             </div> 
             <hr style={{borderTop: '3px solid #2d6e2d'}} />

              <h2>Contact</h2>         
            <div className="social">
            <ListItem>
                  <ListItemContent style={{color:'#fff', fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (123) 456-7890
                  </ListItemContent>
                </ListItem>
                  <br>
                  </br>
                  <ListItem>
                  <ListItemContent style={{color:'#fff', fontSize: '23px', fontFamily: 'Anton' }}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    Email:lcpbadilla@gmail.com
                  </ListItemContent>
                </ListItem>
               
                  <ListItem>
                  <ListItemContent style={{color:'#fff', fontSize: '23px', fontFamily: 'Anton' }}> 
                  <h4>Follow me</h4>

                  <a href="https://github.com/greiven"> <i className="fa fa-github fa-2x" aria-hidden="true"/></a>
                  <a href="https://github.com/greiven"> <i className="fa fa-linkedin fa-2x" aria-hidden="true"/></a>
                  </ListItemContent>
                </ListItem>
            </div>
            
                       
                <hr style={{borderTop: '3px solid #2d6e2d'}} />
              
             

              <h2>Skills</h2>
              
              <Skills 
                skill="javascript"
                progress={14}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={50}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={16}
                    />
                    <Skills
                      skill="React"
                      progress={12} 
                       />
          </Cell>
        </Grid>


      </div>
    )
  }
}

export default Aboutme;
