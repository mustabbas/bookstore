import { Provider } from 'react-redux';
import Nav from './Nav.js';
import store from './redux/cofigureStore.js';

const App = () => (
  <Provider store={store}>
      <Nav/>
  </Provider>
);

export default App;
