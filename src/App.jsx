import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";
import Apply from "./pages/Apply";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resized");
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </>
  );
}
