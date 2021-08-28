import Header from "./common/header";
import store from './store';
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import Home from './pages/home';
import Detail from './pages/detail'；


function App() {
  return (
    <div>
      <Provider store={store}>
        <div>
          <Header />
          <BrowserRouter>
            <Route path='/' exact render={() => <div>Home</div>}></Route>
            <Route path='/detail' exact render={() => <div>Detail</div>}></Route>
          </BrowserRouter>
        </div>
      </Provider>

    </div>
  );
}

export default App;
