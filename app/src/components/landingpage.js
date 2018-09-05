import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Landing extends Component{
    render(){
        return(
        <div style = {{width: '100%', margin:'auto'}}>
            <Grid className ="landing-grid">
 <Cell col={12}>

<div className="banner-text">
 <h1>Create Your Dream Wedding</h1> 
<hr/>
<p><a href="https://www.linkedin.com/in/jasmine-li-7012a564/" rel="noopener noreferrer" target="_blank">| Photographers </a> <a href ="https://www.linkedin.com" rel="noopener noreferrer" target="_blank">| Venues |</a> <a href ="https://github.com" rel="noopener noreferrer" target="_blank"> Planners </a>
<a href ="https://github.com" rel="noopener noreferrer" target="_blank">| Catering |</a></p>

<div className="social-links">

{/* LinkedIn */}
<a href="https://www.linkedin.com/in/jasmine-li-7012a564/" rel="noopener noreferrer" target="_blank"> 
<i className ="fa fa-linkedin-square" aria-hidden="true"/>
</a>

{/* Github */}
<a href="https://github.com/j-marie-li" rel="noopener noreferrer" target="_blank"> 
<i className ="fa fa-github-square" aria-hidden="true"/>
</a>

{/* Facebook */}
<a href="http://facebook.com" rel="noopener noreferrer" target="_blank"> 
<i className ="fa fa-facebook-square" aria-hidden="true"/>
</a>

{/* Youtube */}
<a href="http://youtube.com" rel="noopener noreferrer" target="_blank"> 
<i className ="fa fa-youtube-square" aria-hidden="true"/>
</a>
{/* Wordpress */}
<a href="https://savorthislife.wordpress.com/" rel="noopener noreferrer" target="_blank"> 
<i className ="fa fa-wordpress" aria-hidden="true"/>
</a>
</div>
</div>
 </Cell>
            </Grid>
        </div>
        )
    }
}


export default Landing;