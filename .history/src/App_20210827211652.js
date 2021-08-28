import Header from "./common/header";
import store from './store';
import { BrowserHistory, Route} from "react-router-dom";
import { Provider } from 'react-redux';


function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <BrowserHistory/>
      </Provider>

    </div>
  );
}

export default App;
