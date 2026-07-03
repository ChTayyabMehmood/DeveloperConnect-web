import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Feed from "./pages/Feed";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Requests from "./pages/Requests";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
function App() {
  return (
    <>
      <Provider store={appStore}>
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
              <Route path="/requests" element={<Requests />} />
              {/* <Route path="/network" element={<Network />} /> */}
              {/* <Route path="/settings" element={<Settings />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
