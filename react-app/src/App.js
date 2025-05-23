import logo from './logo.svg';
import './App.css';
import { store } from './actions/store';
import {Provider} from "react-redux";
import DCandidates from './components/DCandidates';

function App() {
  return (
    <Provider store={store}>
      <DCandidates />
    </Provider>
  );
}

export default App;
