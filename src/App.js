import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// pages
import Navbar from './components/Navbar'
import Home from './components/Home'
import FullMenu from './components/FullMenu'
import Custom from './components/Custom'
import ShoppingCart from './components/ShoppingCart'

function App() {
  // show navbar and footer on all pages other than Home
  const DefaultRoutes = () => {
    return (
      <>
        <Navbar/>
        <Switch>
          <Route path='/menu'>
            <FullMenu/>
          </Route>
          <Route path='/make-your-own'>
            <Custom/>
          </Route>
          <Route path='/shopping-cart'>
            <ShoppingCart/>
          </Route>
        </Switch>
      </>
    )
  }
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route component={DefaultRoutes}/>
      </Switch>
    </Router>
  );
}

export default App;
