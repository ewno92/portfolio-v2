import React from "react";
import Profile from "./Profile";
import Footer from "./Footer/Footer";
// import "./Home.scss";
import Header from "./header/Header";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Profile />
      <Footer />
    </div>
  );
};

export default Home;
