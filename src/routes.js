import { Router, Route } from 'react-router-dom';
import Home from './screens/home';
import AboutPage from './screens/about';

export default AppRoute = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/about-me" component={AboutPage}/>
    </Router>
  )
}