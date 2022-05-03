import { Provider } from "react-redux";
import ProductsList from "./components/ProductsList";
import { store } from "./reduxTS/store";
const App = () => {
  return (
    <Provider store={store}>
      <h1>Search for a product</h1>
      <ProductsList />
    </Provider>
  );
};

export default App;
