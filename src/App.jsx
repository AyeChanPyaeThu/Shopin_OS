import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./App.css";
import ProductPage from "./pages/ProductPage";
import About_Us from "./pages/About_Us";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
