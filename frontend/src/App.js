
import './App.css';
import React,{useState} from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import CompanyInfo from './components/CompanyInfo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [validCredentials, setValidCredentials] = useState(false);
  return (
    <Router>
<Routes>
  <Route exact path="/"  element={<Signup />}/>
  <Route exact path="/login"  element={<Login  setValidCredentials={setValidCredentials} />}/>
  <Route path="/companyinfo" element={<CompanyInfo />}/>
                    
 
</Routes>
    </Router>
      // <SignUp/>
      // <Login/>
    
  );
}

export default App;
