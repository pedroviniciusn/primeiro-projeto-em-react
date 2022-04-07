import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import TemplateDefault from './templates/Default'


import CustomersList from './pages//customers/List'
import CustomerRegister from "./pages/customers/Register";
import CustomerEdit from './pages/customers/Edit';
import Home from './pages/Home'


function App() {
  return (
    <Router>
      <TemplateDefault>
        <Routes>
          <Route path="/customers/edit/:id" element={<CustomerEdit/>} />
          <Route path="/customers/add" element={<CustomerRegister/>} />
          <Route path="/customers" element={<CustomersList/>} />
          <Route path="/home" element={<Home/> } />
        </Routes>
      </TemplateDefault>
    </Router>
  );
}

export default App;
