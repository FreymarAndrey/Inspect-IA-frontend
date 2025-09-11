import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import ScheduleAudit from "./pages/ScheduleAudit";
import { publicRoutes } from "./routes";

function App() {
  return (
    <div>
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
    </div>
  );
}
export default App;
