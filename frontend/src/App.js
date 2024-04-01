
import './App.css';
import React,{useState} from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [validCredentials, setValidCredentials] = useState(false);
  return (
    <Router>
<Routes>
  <Route exact path="/"  element={<Signup />}/>
  <Route exact path="/login"  element={<Login  setValidCredentials={setValidCredentials} />}/>

 
</Routes>
    </Router>
      // <SignUp/>
      // <Login/>
    
  );
}

export default App;
