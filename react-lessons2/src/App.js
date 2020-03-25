import React, { Component } from 'react'
import './App.scss'
//можем регать различные роуты внутри реакт прилажения
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import About from './About/About'
import Cars from './Cars/Cars'
import CarDetail from './CarDetail/CarDetail'

class App extends Component {

  state = {
    isLoggedIn: false
  }
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
          {/* Защита роута */}
          <div style={{ textAlign: 'center' }}>
            <h3>Is logged in {this.state.isLoggedIn ? 'true' : 'false'}</h3>
            <button onClick={() => this.setState({ isLoggedIn: true })}>Login</button>
          </div>

          <hr />
          {/*Path - путь на который должен откликатся данный роут */}
          {/* Exact - рендерит данный роут только если адресс полностью совпадает с тем что зареган в пути */}
          {/* Switch - аналогия exact */}
          <Switch>
            <Route path="/" exact render={() => <h1>Home Page</h1>} />
            {/* Защищаем About */}
            {this.state.isLoggedIn ? <Route path="/about" component={About} /> : null}

            <Route path="/cars/:name" component={CarDetail} />
            <Route path="/cars" component={Cars} />
            {/* В случае если нет совпадения роутов то делаем редирект на страницу / */}
            <Redirect to={'/'} />
            {/* Отрабатывает не существующий роут */}
            {/* <Route render={() => <h1 style={{ color: 'red', textAlign: "center" }}>Error 404 Not Found</h1>} /> */}


          </Switch>
        </div>
      </BrowserRouter >
    );
  }
}

export default App
