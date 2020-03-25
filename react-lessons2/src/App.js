import React, { Component } from 'react'
import './App.scss'
//можем регать различные роуты внутри реакт прилажения
import { Route, NavLink } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import About from './About/About'
import Cars from './Cars/Cars'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="nav">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/cars">Cars</NavLink>
              </li>
            </ul>
          </nav>

          <hr />
          {/*Path - путь на который должен откликатся данный роут */}
          {/* Exact - рендерит данный роут только если адресс полностью совпадает с тем что зареган в пути */}
          <Route path="/" exact render={() => <h1>Home Page</h1>} />
          <Route path="/about" component={About} />
          <Route path="/cars" component={Cars} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App
