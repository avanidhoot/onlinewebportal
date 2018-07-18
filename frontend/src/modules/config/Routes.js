import React from 'react';
import {
  BrowserRouter as Router} from 'react-router-dom'
import {Route} from 'react-router';
 //import {Container} from 'semantic-ui-react';
import { Login, Signup,Products,App} from '../index';
// Footer,Header,Sidebar
const Routes = ()=> {
    return(        
        <Router>
          
            <span>    
                <Route exact path="/" component={App} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/products" component={Products} />
            </span>
        </Router>
    )
}
export default Routes
