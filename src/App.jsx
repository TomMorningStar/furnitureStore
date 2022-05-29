import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Main from "./components/Main";
import { Routes, Route, Navigate } from "react-router-dom";
import NoMatch from "./components/noMatch/NoMatch";
import SignIn from "./components/header/authorization/SignIn";
import SignUp from "./components/header/authorization/SignUp";
import { useSelector } from "react-redux";

const App = () => {
  const token = useSelector((state) => state.user.token);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<NoMatch />} />
        {!token ? (
          <Route path="/login" element={<SignIn token={token} />} />
        ) : (
          <Route path="/login" element={<Navigate to="/" replace />} />
        )}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
