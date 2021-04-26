import { Provider } from 'react-redux';
import store from './store';
import Header from './components/header';
import Navigation from './components/navigation';
import PizzaContainer from './components/pizzaContainer';
import Footer from './components/footer';
import Suggestion from './components/suggestion';

function App() {
  return (
    <div className="app">
      <Header />
      <Provider store={store}>
        <Suggestion />
        <Navigation />
        <PizzaContainer />
      </Provider>
      <Footer />
    </div>
  );
}

export default App;
