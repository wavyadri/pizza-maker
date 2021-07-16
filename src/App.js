import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// pages
import Home from './components/Home'
import FullMenu from './components/FullMenu'
import Custom from './components/Custom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/menu'>
          <FullMenu/>
        </Route>
        <Route path='/make-your-own'>
          <Custom/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
