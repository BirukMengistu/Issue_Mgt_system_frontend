import React ,{lazy , Suspense} from 'react';

import './App.css';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import User from './Pages/User';
import AddCase from './components/cases/AddCase';



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
             
             <Route path="/add-issue" element={<AddCase/>}/>
          </Routes>
       </main>
         </Suspense>{}
      </Router> 
  );
}

export default App;


 