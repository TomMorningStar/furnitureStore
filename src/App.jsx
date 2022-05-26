import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import NoMatch from "./components/noMatch/NoMatch";
import SignIn from "./components/header/authorization/SignIn";
import SignUp from "./components/header/authorization/SignUp";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<NoMatch />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
