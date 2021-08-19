import Header from "./common/header";
import store from './store';
import { Provider } from 'react-redux';


function App() {
  return (
    <div>
      <Provider>
        <Header />
      </Provider>

    </div>
  );
}

export default App;
