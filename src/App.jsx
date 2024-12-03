import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/signIn";
import SignUp from "./Pages/signUp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
