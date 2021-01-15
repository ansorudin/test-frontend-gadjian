import React from 'react'
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import Header from './header/Header'
import rootReducer from '../redux/reducer';
import MainContent from './main-content/MainContent';

const store = createStore(rootReducer, applyMiddleware(thunk))

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <MainContent />
      </div>
    </Provider>
  )
}

export default App

