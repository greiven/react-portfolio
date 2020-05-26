import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";
import "../App.css";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0,
    };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid" style={{ width: "80%", margin: "auto"  }}>
         
          <Grid>
            <Cell col={4}>
              <Card shadow={1} className="card">
                <CardTitle
                  style={{
                    height: "286px",
                    width: "350px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: "url(/images/Atary2.jpg)",
                    color: "black",
                  }}
                >
            
                </CardTitle>
                <CardText style={{whiteSpace: 'nowrap'}}>
             

                </CardText>
                <CardActions border>
                  <Button
                    href="https://github.com/greiven/Atary-Game"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                                {" "}
                  <Button
                    href="https://greiven.github.io/Atary-Game/"
                    target="_blank"
                    colored
                  >
                    Deployed Project
                  </Button>
                               
                </CardActions>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>



                        {/*Project #2*/}

            <Cell col={4}>
              <Card shadow={0} className="card">


                <CardTitle
                  style={{
                    height: "286px",
                    width: "350px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: "url(/images/notetaker.jpg)",
                    color: "black",
                  }}
                >
                 
                </CardTitle>
                <CardText>
                </CardText>
                <CardActions border>
                <Button
                    href="https://github.com/greiven/Notetaker"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                                {" "}
                  <Button
                    href="https://grei-notesapp.herokuapp.com/
                    "
                    target="_blank"
                    colored
                  >
                    Deployed Project
                  </Button>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>




            {/*Project #3*/}
            <Cell col={4}>
              <Card shadow={0} className="card">
                <CardTitle
                  style={{
                    height: "286px",
                    width: "350px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: "url( /images/rpskombat2.jpg)",
                    color: "black",
                   
                  }}
                >
                  
                </CardTitle>
                <CardText>
                </CardText>
                <CardActions border>
                  <Button
                    href="https://github.com/greiven/project2"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                                {" "}
                  <Button
                    href=" https://still-peak-87577.herokuapp.com/
                    "
                    target="_blank"
                    colored
                  >
                    Deployed Project
                  </Button>
                               
                </CardActions>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>



            {/*Project #4*/}

            <Cell col={4}>
              <Card shadow={0} className="card">
                <CardTitle
                  style={{
                    height: "286px",
                    width: "350px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: "url(images/burgerapp2.jpg)",
                    color: "black",
                  }}
                >
                  
                </CardTitle>
                <CardText>
                </CardText>
                <CardActions border>
                  <Button
                    href="https://github.com/greiven/burgerhw"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                                {" "}
                  <Button
                    href="https://github.com/greiven/burgerhw"
                    target="_blank"
                    colored
                  >
                    Deployed Project
                  </Button>
                               
                </CardActions>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>


            {/* Project 5*/}

            <Cell col={4}>
              <Card shadow={0} className="card">
                <CardTitle
                  style={{
                    height: "286px",
                    width: "350px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: "url(/images/weatherapp2.jpg)",
                    color: "black",
                  }}
                >
                  
                </CardTitle>
                <CardText>
                 This is a random password generator.
                </CardText>
                <CardActions border>
                  <Button
                    href="https://github.com/greiven/weatherpage"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                                {" "}
                  <Button
                    href="https://greiven.github.io/weatherpage/
                    "
                    target="_blank"
                    colored
                  >
                    Deployed Project
                  </Button>
                               
                </CardActions>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>

<Cell col={4}>
              <Card shadow={0} className="card">
                <CardTitle
                  style={{
                    height: "286px",
                    width: "350px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: "url(/images/quiz2.jpg",
                    color: "black",
                  }}
                >
                  
                </CardTitle>
                <CardText>
                </CardText>
                <CardActions border>
                  <Button
                    href="https://github.com/greiven/Quiz-app"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                                {" "}
                  <Button
                    href="https://greiven.github.io/Quiz-app/"
                    target="_blank"
                    colored
                  >
                    Deployed Project
                  </Button>
                               
                </CardActions>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
          </Grid>


        </div>
      );
    } 
    
    else if (this.state.activeTab === 1) {
      return (
        <div>
          <Grid>
            <Cell
              col={12}
              style={{ justifyContent: "center", display: "flex" }}
            >
            </Cell>
          </Grid>
        </div>
      );
      

    }
  }

  render() {
    return (
      <div className="category-Tabs">
        <Grid>
          <Cell col={12} style={{ margin: "auto" }}>
            <Tabs>
              <Tab style={{ fontSize: "14px", fontWeight: "bold" }}>
                My Projects
              </Tab>
            </Tabs>
          </Cell>
        </Grid>



        <section>
          <Grid>
            <Cell col={12}>
              <div>{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;
