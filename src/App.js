import Cart from "./components/cart/Cart";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Keypad from "./components/layout/keypad/Keypad";
import CustomerCard from "./UI/customerCard/CustomerCard";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#ff6900",
        display: "flex",
      }}
    >
      <div className="wrapper">
        <Header />
        <main className="main">
          <div className="checkout">
            <CustomerCard />
            <Cart />
          </div>
          <Keypad />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
