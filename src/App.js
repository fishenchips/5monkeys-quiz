import Cart from "./components/cart/Cart";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Keypad from "./components/layout/keypad/Keypad";
import CustomerCard from "./UI/customerCard/CustomerCard";

/* 
  TODO

  try flexing entire app so that footer doesnt end up in the middle of main
  otherwise find correct height

*/

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#ff6900",
        display: "flex",
        width: "100vw",
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
