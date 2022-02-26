import React from "react";
import './App.css'

// import Nav from "./components/Nav";
// import Hero from "./components/Hero";
import Form from "./components/Form";
import { Route, Switch, Link } from "react-router-dom";




const App = () => {
  

  return (
    <div className="App">
      <header className='header'>
        <h1>Italian Pizza</h1>
        <Link to="/">
          <button>Home</button>
        </Link>
      </header>

      <section className='section'>
        <Link to="/pizza">
          <button id="order-pizza">Order</button>
        </Link>
      </section>

      <Switch>
        <Route exact path="/"></Route>
        <Route path="/pizza">
          <Form
          />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
