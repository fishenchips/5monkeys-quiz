import Cart from "./UI/cart/Cart";
import CustomerCard from "./UI/customerCard/CustomerCard";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#FF8C00" }}>
      <main className="main">
        <CustomerCard />
        <Cart />
      </main>
    </div>
  );
}

export default App;
