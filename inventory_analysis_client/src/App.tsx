import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import ListShow from "./components/Analysis/List_Show";
import ReportGen from "./components/Analysis/Report_Gen";
import InventoryDetail from "./components/Analysis/inventory_detail";
import Con_Llms from "./components/Analysis/Con_Llm";
import BMI_Model from "./components/Analysis/BMI_Model";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analysis/listshow" element={<ListShow />} />
          <Route path="/analysis/reportgen" element={<ReportGen />} />
          <Route path="/analysis/bmi_model" element={<BMI_Model />} />
          <Route path="/analysis/conversational_llms" element={<Con_Llms />} />
          <Route path="//inventory/item/:record_id" element={<InventoryDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;