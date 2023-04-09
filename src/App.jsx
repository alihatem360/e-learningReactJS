import React from "react";
import Navigation from "./Components/NavigationCom";
import SubjectDetails from "./Components/SubjectDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path="subjectDetails" element={<SubjectDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
