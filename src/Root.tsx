import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function Router() {
  return (
    <div>
      {/* <Router /> */}
      <Header />
      <Outlet context={{ darkMode: true }} />
    </div>
  );
}

export default Router;
