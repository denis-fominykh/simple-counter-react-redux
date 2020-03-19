import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './App.scss';
import reducer from './reducers/reducer';
import Counter from './components/Counter';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
