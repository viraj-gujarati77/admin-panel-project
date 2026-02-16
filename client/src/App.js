import { BrowserRouter, Routes, Route } from "react-router-dom";

// import "./App.css";
import LoginSignup from "./Components/Assets/LoginSignup/LoginSignup";
import Home from "./Components/Assets/Home/Home";
import Header from "./Components/Assets/Header/Header";
import Sidebar from "./Components/Assets/Sidebar/Sidebar";
import Products from "./Components/Assets/Products/Products";
// import Toggle from "./Components/Assets/Toggle/Toggle";

import { Component } from "react";
// import Dashboard from "./Components/Assets/Dashboard/Dashboard";

class App extends Component {
  loginHandler = () => {};

  render() {
    return (
      <div className="App" data-theme="dark">
        <BrowserRouter>
          <Routes>
            <Route path="" element={<LoginSignup />} />
            <Route
              path="/Home"
              element={
                <div className="app-container">
                  <Header style={{ display: "flex" }} />
                  <div className="body-container">
                    <Sidebar />
                    <main className="content">
                      {/* <Toggle isChecked={isDark} /> */}
                      <Home />
                    </main>
                  </div>
                </div>
              }
            />
            <Route path="/Products" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
