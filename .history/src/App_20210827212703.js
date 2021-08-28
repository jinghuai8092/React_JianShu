import Header from "./common/header";
import store from './store';
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from 'react-redux';


function App() {
  return (
    <div>
      <Provider store={store}>
        <div>
          <Header />
          <BrowserRouter>
            <Route path='/' exact render={() => <div>Home</div>}></Route>
            <Route path='/detail' render={() => <div>Detail</div>}></Route>
          </BrowserRouter>
        </div>
      </Provider>

    </div>
  );
}

export default App;
