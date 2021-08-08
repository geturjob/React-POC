import './App.css';

// import { mySaga } from './Sagas/saga.js';
// import createSagaMiddleware from 'redux-saga';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './FoodApp/Reducers/RootReducer.js';
import AppRouting from './App-Routing/app-routing';

function App() {

  // const sagaMiddleware = createSagaMiddleware();
  // let store = createStore(Reducers, applyMiddleware(sagaMiddleware));
  // sagaMiddleware.run(mySaga);

  let store = createStore(Reducers);

  return (
    <Provider store={store}>
        <AppRouting></AppRouting>
    </Provider>
  );
}

export default App;
