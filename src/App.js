import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import Router from './config/Router/router';
import store from './config/Redux/Store/Store';



function App() {


  return (
    // <Provider store={store}>

    //   <AppRouter />

    // </Provider>
    <Router />

  );
}

export default App;
