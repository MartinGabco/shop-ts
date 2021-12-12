import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

//navigation
import Navigation from './navigation/Navigation';

//components
import Products from './components/Products';
import Likes from './components/Likes';

//CSS
import './App.css';

function App() {

  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
          <Switch>
            <Route path="/" component={Products} exact/>
            <Route path="/likes" component={Likes}/>
          </Switch>
      </main>
    </div>
  );
}

export default App;
