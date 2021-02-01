import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import ItemsContainer from './containers/itemsContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Default from './components/Default';
import Details from './components/Details';
import Cart from './components/Cart';

class App extends React.Component {
  render() {
    return (
        <>
        <Navbar />
        <Switch>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route exact path="/" component={ProductList}></Route>
          <Route component={Default}></Route>
        </Switch>
      </>
    );
  }
}

export default App;