import CartItems from "./components/cartItems/CartItems";
import CustomerCard from "./UI/customerCard/CustomerCard";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#FF8C00" }}>
      <CustomerCard />
      <CartItems />
    </div>
  );
}

export default App;
