import Header from "./common/header";
import store from './store';
import { BrowserRouter, Route} from "react-router-dom";
import { Provider } from 'react-redux';


function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <Route path='/' render={()=><div>Home</div>}></Route>
          <Route path='/detail' render={()=><div>Detail</div>}></Route>
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
