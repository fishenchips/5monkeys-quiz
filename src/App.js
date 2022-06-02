import Cart from "./components/cart/Cart";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import CustomerCard from "./UI/customerCard/CustomerCard";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#ff6900" }}>
      <div className="wrapper">
        <Header />
        <main className="main">
          <CustomerCard />
          <Cart />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
