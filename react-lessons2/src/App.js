import React, { Component } from 'react'
import './App.scss'
//можем регать различные роуты внутри реакт прилажения
import { Route } from 'react-router-dom'
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
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/cars">Cars</a>
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
