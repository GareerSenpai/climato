import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/user/Login.js"
import Signup from "./pages/user/Signup.js"
import RSignIn from "./pages/recycler/RLogin.js"
import RSignup from "./pages/recycler/RSignup.js"
import Landingpage from "./pages/landingpage.js";
import { Dashboard } from "./pages/dashboard.js";
import Recycle from "./pages/user/Recycle.js";
import LeaderBoard from "./pages/LeaderBoard.js";
import Learn from "./pages/Learn.js";
import History from "./pages/History.js";
import OrderForm from "./pages/OrderForm.js";
import Reward from "./pages/reward.js";
import QuestionContainer from "./component/qustions/QuestionContainer.js";

function App() {
  return (
    <div className='bg-black '>
      
     <div className="body-container my-0 mx-[9rem]">

      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>I
        <Route path="/recycler/rlogin" element={<RSignIn />}></Route>
        <Route path="recycler/rsignup" element={<RSignup />}></Route>
        <Route path="/" element={<QuestionContainer />}></Route>
        <Route path="/landing" element={<Landingpage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/recycle" element={<Recycle/>}></Route>
        <Route path="/history" element={<History/>}></Route>
        <Route path="/leaderboard" element={<LeaderBoard/>}></Route>
        <Route path="/learn" element={<Learn/>}></Route>
        <Route path="/order" element={<OrderForm/>}></Route>
        <Route path="/reward" element={<Reward/>}></Route>
      </Routes>
     </div>
    
    </div>
  );
}

export default App;
