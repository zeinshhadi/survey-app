import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import Register from "./components/register";
import Login from "./components/login";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";
import AddQuestion from "./components/addQuestion";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userpage" element={<UserPage />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/add-questions/:surveyId" element={<AddQuestion />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
