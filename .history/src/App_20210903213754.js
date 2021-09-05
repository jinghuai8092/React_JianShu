import Header from "./common/header";
import store from './store';
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';


function App() {
  return (
    <div>
      <Provider store={store}>
          <BrowserRouter>
            <Header />
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail/:id' exact  component={Detail}></Route>
            <Route path='/login' exact  component={Login}></Route>
          </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
