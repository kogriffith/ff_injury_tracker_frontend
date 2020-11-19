import React from 'react'
import { Link, 
        Switch,
        Route,
        useParams,
        Redirect} from 'react-router-dom'
import {Container} from 'reactstrap'

const App = () => {
  return (
    <div className="App">
        <CustomNavbar></CustomNavbar>
        <Container>
        <Switch>
          <Redirect exact from="/" to= "/home" />
          <Route path = "/home">
            <Home/>
          </Route>
          <Route exact path = "/players/:id">
            <PlayerCard></PlayerCard>
          </Route>
        </Switch>
        </Container>
    </div>
  );
}

export default App;
