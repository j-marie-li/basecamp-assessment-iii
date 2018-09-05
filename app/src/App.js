import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div style={{height: '300px'}}>
    <Layout style={{background: 'url(https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/38799345_10156802692698109_7296636341930950656_o.jpg?_nc_cat=0&efg=eyJpIjoidCJ9&oh=ea96206c8db75a7792bcf98d2a27a9af&oe=5BF964D1) center / cover'}}>
        <Header className = "header-color" transparent title="The Place for all your Wedding Needs" style={{color: 'white'}}>
            
            <Navigation>
                <Link to="/photographers">Photographers </Link>
                <Link to="/weddingplanners">Wedding Planners</Link>
                <Link to="/catering">Catering</Link>
                <Link to="/venues">Venues</Link>
            </Navigation>
        </Header>
        <Drawer title="I Do">
            <Navigation>
                <Link to="/photographers">Photographers</Link>
                <Link to="/weddingplanners">Wedding Planners</Link>
                <Link to="/catering">Catering</Link>
                <Link to="/venues">Venues</Link>
            </Navigation>
        </Drawer>
        <Content>
            
        <Main/>
        </Content>
    </Layout>

</div>
    );
        }
      }

export default App;
