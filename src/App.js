import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// pages
import Navbar from './components/Navbar'
import Home from './pages/Home'
import FullMenu from './pages/FullMenu'
import Custom from './pages/Custom'
import Checkout from './pages/Checkout'
import Header from "./components/Header"
import SinglePizza from './pages/SinglePizza'
import Error from './pages/Error'

function App() {
  // show navbar and footer on all pages other than Home
  const DefaultRoutes = () => {
    return (
      <>
        <Navbar/>
        <Switch>
          <Route path='/our-menu'>
            <Header/>
            <FullMenu/>
          </Route>
          <Route path='/make-your-own'>
            <Header/>
            <Custom/>
          </Route>
          <Route path='/checkout'>
            <Header/>
            <Checkout/>
          </Route>
          <Route path='/menu/:title' children={<SinglePizza/>}></Route>
          <Route path='*'>
            <Error/>
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
