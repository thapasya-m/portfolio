import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './screens/home/home';
import AboutPage from './screens/about/about';
import ProjectsPage from './screens/projects/projects';
import SkillsPage from './screens/skills/skills';

function App() {
  return (
    <Switch>
      <Route component={AboutPage} path="/about-me"/>
      <Route component={ProjectsPage} path="/projects"/>
      <Route component={SkillsPage} path="/skills"/>
      <Route component={Home} path="/" exact/>
      <Route path="*" render={() => <Redirect to="/"/>}/>
    </Switch>
  );
}

export default App;
