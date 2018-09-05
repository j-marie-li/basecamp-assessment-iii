import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import LandingPage from './landingpage';
import WeddingPlanners from './weddingplanners';
import Venues from './venues';
import Catering from './catering';
import Photographers from './photographers';

class Main extends Component{
    
    
render() {
    return (
        <Switch>
        <Route  exact path ="/" component={LandingPage}/>
        <Route  path ="/weddingplanners" component={WeddingPlanners}/>
        <Route  path ="/venues" component={Venues}/>
        <Route  path ="/catering" component={Catering}/>
        <Route  path ="/photographers" component={Photographers}/>

        </Switch>
    );
}
}

export default Main;