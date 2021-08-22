import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import Home from "./pages/Home/Home";
import UserList from "./pages/User/UserList";
import UserDetail from "./pages/User/UserDetail";
import Album from "./pages/Album/Album";
import NavigationBar from "./components/NavigationBar";
import AlbumList from "./pages/Album/AlbumList";

const App = () => {
  return (
      <Container>
          <BrowserRouter>
              <div className="App">
                  <NavigationBar />
                  <Route exact path='/' component={Home}/>
                  <Route exact path='/users' component={UserList}/>
                  <Route exact path='/users/:userId' component={UserDetail}/>
                  <Route exact path='/albums' component={AlbumList}/>
                  <Route exact path='/albums/:albumId' component={Album}/>
              </div>
          </BrowserRouter>
      </Container>
  );
}

export default App;
