import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Feed from "./pages/Feed";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Requests from "./pages/Requests";
import { addUser } from "./utils/userSlices";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "./utils/constants";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const fetchUser = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/profile/view`, {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
      console.log(res.data);
    } catch (error) {
      if (error.status == 401) {
        navigate("/");
      }
      console.error("Error fetching user:", error);
    }
  };
  useEffect(() => {
    if (
      location.pathname === "/login" ||
      location.pathname === "/" ||
      location.pathname === "/signup"
    ) {
      return;
    }

    fetchUser();
  }, []);
  return (
    <>
      <Routes>
        {/* Public Routes - NO AppLayout wrapper */}

        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Authenticated Routes - Wrapped in AppLayout */}
        <Route element={<AppLayout />}>
          <Route path="/feed" element={<Feed />} />
          {/* Future routes go HERE as siblings to /feed */}
          <Route path="/requests" element={<Requests />} />
          {/* <Route path="/network" element={<Network />} /> */}
          {/* <Route path="/settings" element={<Settings />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
