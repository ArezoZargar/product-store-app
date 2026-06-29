import AppRoutes from "./routes/AppRoutes";
import { useSettings } from "./context/useSettings";

export default function App() {
  const { state } = useSettings();

  return (
    <div className={state.theme}>
      <AppRoutes />
    </div>
  );
}
