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
                  pathname: '/cars',
                  // после ? идут какие-то параметры (в браузере отображаются в адресной строке)
                  search: '?a=1&b=2',
                  // hash - для того что бы скролить до определённого елемента (в браузере отображаются в адресной строке)
                  hash: 'wfm-hach'
                }}>Cars</NavLink>
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
