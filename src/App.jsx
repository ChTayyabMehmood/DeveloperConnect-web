import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Feed from "./pages/Feed";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes - NO AppLayout wrapper */}

        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Authenticated Routes - Wrapped in AppLayout */}
        <Route element={<AppLayout />}>
          <Route path="/feed" element={<Feed />} />
          {/* Future routes go HERE as siblings to /feed */}
          {/* <Route path="/requests" element={<Requests />} /> */}
          {/* <Route path="/network" element={<Network />} /> */}
          {/* <Route path="/settings" element={<Settings />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
