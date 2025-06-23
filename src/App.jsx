import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppLogin from "./components/AppLogin";
import CreateItem from "./components/Item/CreateItem";
import UpdateItem from './components/Item/UpdateItem';
import DeleteItem from './components/Item/DeleteItem';
import CreateInspection from './components/Inspection/CreateInspection';
import ListItems from './components/Inspection/listInspectedItem';
import UpdateInspection from './components/Inspection/EditInspection';
import DeleteInspection from './components/Inspection/DeleteInspection';
const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<AppLogin />} />
     
<Route path="/create-item" element={<CreateItem />} />
      <Route path="/update-item" element={<UpdateItem />} />
      <Route path="/delete-item" element={<DeleteItem />} />
      <Route path="/create-inspection" element={<CreateInspection />} />
      <Route path='list-inpected-item' element={<ListItems/>} />
      <Route path="/update-inspection" element={<UpdateInspection />} />
      <Route path="/delete-inspection" element={<DeleteInspection />} />
    

    
      </Routes>
      </Router>
  )
}

export default App
