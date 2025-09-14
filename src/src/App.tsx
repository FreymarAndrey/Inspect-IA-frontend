import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import ScheduleAudit from "./pages/ScheduleAudit";
import { publicRoutes } from "./routes";
import { AuthProvider, UIProvider } from "./context";
import Toast from "./components/toast";

function App() {
  return (
    <div>
      <UIProvider>
        <AuthProvider>
          <Toast />
          <BrowserRouter>
            <Routes>
              <Route path="*" element={<Navigate to="/" replace />} />
              <Route path="/" element={<Home />} />
              <Route
                path={`/${publicRoutes.SCHEDULE}`}
                element={<ScheduleAudit />}
              />
              <Route path={`${publicRoutes.AUTH}/*`} element={<Auth />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </UIProvider>
    </div>
  );
}
export default App;
