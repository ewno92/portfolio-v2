import "./App.css";
import "./index.scss";
// import Home from "./components/home/Home";
import Header from "./components/home/header/Header";
import PortfolioContainer from "./components/PortfolioContainer";
function App() {
  return (
    <div className="App">
      <Header />
      <PortfolioContainer />
      {/* <Home /> */}
    </div>
  );
}

export default App;
