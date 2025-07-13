import ProductList from "./pages/Products/ProductList";
import Cartprovider from "./context/Cartprovider";
import Header from "./components/Header/Header";
function App() {
  return (
    <>
      <Cartprovider>
        <Header />
        <ProductList />
      </Cartprovider>
    </>
  );
}

export default App;
