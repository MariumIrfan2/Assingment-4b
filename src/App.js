import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import AppRouter from './config/Router/router';
import store from './config/Redux/Store/Store';



function App() {


  return (
    // <Provider store={store}>

    //   <AppRouter />

    // </Provider>
    <AppRouter />

  );
}

export default App;
