
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './styles/global.css'
import Navbar from './components/Navbar'
import Home from './pages/Home/index'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
    </Switch>
    <Footer />
    </Router>
    </div>
  );
}

export default App;