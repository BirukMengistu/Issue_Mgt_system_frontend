import React ,{lazy , Suspense} from 'react';

import './App.css';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import User from './Pages/User';
import AddCase from './components/cases/AddCase';
import ManageCases from './components/cases/ManageCases';
import CompletedCase from './components/cases/CompletedCase';
import AssignCase from './components/cases/AssignCase';
import CaseDetails from './components/cases/CaseDetails';



const MainNavbar =lazy(()=>import('./components/nav/MainNavbar'))
const Home =lazy(()=>import('./Pages/Home'))
function App() {
  return (
    <Router>
        <MainNavbar/>
        <Suspense fallback={<h1>loading ....</h1>}>
      <main>
          <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/user" element={<User/>}/>
             <Route path="/case-status" element={<ManageCases />}/>
             <Route path="/case-resolved" element={<CompletedCase />}/>
             <Route path="/add-issue" element={<AddCase/>}/>
             <Route path="/modifiy-case" element={<AssignCase />}/>
             <Route path="/case-details" element={<CaseDetails />}/>
             <Route path="/case-details/:id" element={<CaseDetails />}/>
          </Routes>
       </main>
         </Suspense>
      </Router> 
  );
}

export default App;


 