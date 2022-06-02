import Cart from "./components/cart/Cart";
import Header from "./components/layout/Header";
import CustomerCard from "./UI/customerCard/CustomerCard";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#FF8C00" }}>
      <Header />
      <main className="main">
        <CustomerCard />
        <Cart />
      </main>
    </div>
  );
}

export default App;
