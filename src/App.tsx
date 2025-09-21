import "./App.css";
import DashboardLayout from "./DashboardLayout";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <DashboardLayout />
    </Router>
  );
}

export default App;
