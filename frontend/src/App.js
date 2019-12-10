import React, { Component } from 'react';
import Products from './components/Products';
import Filter from './components/Filter';
import Basket from './components/Basket';
import mainReducer from './store/store';
import { configAuthAxios } from './components/utilities/MyAxios';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/utilities/PrivateRoute';
import { StateProvider } from './components/utilities/context';
import Login from './components/pages/login/login';
import Signin from './components/pages/singin/Signin';
import Reser from './components/pages/private/reservaciones/reser';
import ReserForm from './components/pages/private/reserform/reserform';

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state=mainReducer();
    if(this.state.auth.jwt!=''){
      configAuthAxios(this.state.auth);
      this.state = { size: '', sort: '', cartItems: [], products: [], filteredProducts: [] };
    }
    
  }




  componentWillMount() {

    if (localStorage.getItem('cartItems')) {
      this.setState({ cartItems: JSON.parse(localStorage.getItem('cartItems')) });
    }

    fetch('http://localhost:8000/products').then(res => res.json())
      .catch(err => fetch('db.json').then(res => res.json()).then(data => data.products))
      .then(data => {
        this.setState({ products: data });
        this.listProducts();
      });
  }

  handleRemoveFromCart = (e, product) => {
    this.setState(state => {
      const cartItems = state.cartItems.filter(a => a.id != product.id);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { cartItems: cartItems };
    })
  }

  handleAddToCart = (e, product) => {
    this.setState(state => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;

      cartItems.forEach(cp => {
        if (cp.id === product.id) {
          cp.count += 1;
          productAlreadyInCart = true;
        }
      });

      if (!productAlreadyInCart) {
        cartItems.push({ ...product, count: 1 });
      }
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { cartItems: cartItems };
    });
  }

  listProducts = () => {
    this.setState(state => {
      if (state.sort !== '') {
        state.products.sort((a, b) =>
          (state.sort === 'lowestprice'
            ? ((a.price > b.price) ? 1 : -1)
            : ((a.price < b.price) ? 1 : -1)));
      } else {
        state.products.sort((a, b) => (a.id > b.id) ? 1 : -1);
      }
      if (state.size != '') {
        return { filteredProducts: state.products.filter(a => a.availableSizes.indexOf(state.size.toUpperCase()) >= 0) };
      }
      return { filteredProducts: state.products };
    })
  }
  handleSortChange = (e) => {
    this.setState({ sort: e.target.value });
    this.listProducts();
  }
  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
    this.listProducts();
  }

  render() {
    return (
      <StateProvider initialState={this.state} reducer={mainReducer}>
        <Router>
          <Switch>
              <Route path="/login" component={Login}/>
              <Route path="/signin" component={Signin} />
              <PrivateRoute path="/reser" component={Reser}/>
              <PrivateRoute path="/reserform" component={ReserForm} />
              <div className="container">
              <h1 textJustify >CINES HACIENDA REAL</h1>
              <hr />
              <div className="row">
                <div className="col-md-9">
                  <Filter count={this.state.filteredProducts.length} handleSortChange={this.handleSortChange}
                    handleSizeChange={this.handleSizeChange} />
                  <hr />
                  <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart} />
                </div>
                <div className="col-md-3">
                  <Basket cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart} />
                </div>

               </div>

               </div>
            </Switch>
        </Router>
      </StateProvider>
    );
  }
}

export default App;
