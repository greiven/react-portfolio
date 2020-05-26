import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>

            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
            <Navigation>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>

            </Navigation>
            
        </Drawer>
        <Content>
            <div className="content" />
            <Main/>
        </Content>
        <div className="footer">
        <Footer> </Footer>
    </div>
    </Layout>
</div>

    );
  }
}

export default App;
