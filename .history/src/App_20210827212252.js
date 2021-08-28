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
          
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
