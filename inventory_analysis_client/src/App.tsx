import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import ListShow from "./components/Analysis/List_Show";
import ReportGen from "./components/Analysis/Report_Gen";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analysis/listshow" element={<ListShow />} />
          <Route path="/analysis/reportgen" element={<ReportGen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;