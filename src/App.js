import React from "react";
import Drawer from "./components/Drawer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FullScreen from "./pages/Video/fullScreen/FullScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Drawer />} />
        <Route path="/full/:id" element={<FullScreen />} />
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
