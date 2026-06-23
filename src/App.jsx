import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { useSettings } from "./context/useSettings";
import { useLocation } from "react-router-dom";
export default function App() {
  const { state } = useSettings();
  const location = useLocation();
  const hideNavbar = location.pathname === "/success";
  return (
    <div className={state.theme}>
      {!hideNavbar && <Navbar />}
     
      <AppRoutes />
    </div>
  );
}
