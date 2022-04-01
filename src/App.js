import './App.css';
import { AppUI } from './AppUi';
import {Provider} from './Context'


function App() {
  return (
    <Provider>
      <AppUI/>
    </Provider>
    
  );
}

export default App;
