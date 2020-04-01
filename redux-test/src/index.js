import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import rootReducer from './redux/rootReducer'


// function loggerMiddleware(store) { //Middleware - функция которая добавляет определённый функционал чему-то (на пример Redux)
//   return function (next) {
//     return function (action) {
//       const result = next(action)
//       console.log('Middleware', store.getState())
//       return result
//     }
//   }
// }
//То же что и выше но проще 
const loggerMiddleware = store => next => action => {
  const result = next(action)
  console.log('Middleware', store.getState())
  return result
}



const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, reduxThunk))

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)


ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
