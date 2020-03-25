import React, { Component } from 'react'
import './App.scss'
//можем регать различные роуты внутри реакт прилажения
import { Route, NavLink, Switch } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import About from './About/About'
import Cars from './Cars/Cars'
import CarDetail from './CarDetail/CarDetail'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="nav">
            <ul>
              <li>
                {/* по стандарту используется класс active, если хотим задать свой класс пишем activeClassName={' имя класса'} */}
                <NavLink
                  to="/"
                  exact
                  activeClassName={'wfm-active'}
                >Home</NavLink>
              </li>
              <li>
                {/* так же можем задавать стилистику прямо тут с помощью exact activeStyle={{}} */}
                <NavLink to="/about" activeStyle={{
                  color: 'blue'
                }}>About</NavLink>
              </li>
              <li>
                {/* так же можно передовать путь не как строку, а как обьект */}
                <NavLink to={{
                  pathname: '/cars'
                }}>Cars</NavLink>
              </li>
            </ul>
          </nav>

          <hr />
          {/*Path - путь на который должен откликатся данный роут */}
          {/* Exact - рендерит данный роут только если адресс полностью совпадает с тем что зареган в пути */}
          {/* Switch - аналогия exact */}
          <Switch>
            <Route path="/" exact render={() => <h1>Home Page</h1>} />
            <Route path="/about" component={About} />
            <Route path="/cars/:name" component={CarDetail} /
            ><Route path="/cars" component={Cars} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
