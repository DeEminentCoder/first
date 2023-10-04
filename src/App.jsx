import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import User from "./components/User";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/*WildCard Routing*/}
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/me" element={<Contact />} />
        {/*Children Routing*/}
        <Route path="/contact/:username" element={<User />} />
        {/*Dynamic Routing/Parameterized route*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
