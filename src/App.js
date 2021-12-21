import { Provider } from 'react-redux';
import configureStore from './store';
import Grid from './components/container/Grid';
import './App.css';

// const store = configureStore()

function App() {
  return (
    <Provider store={configureStore()}>
    <div className="App">
      <Grid />
    </div>
    </Provider>
  );
}

export default App;
