import { Outlet } from "react-router-dom";
import { CartOverview } from "../features";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div>
      <Header />

      <main>
        <Outlet /> {/* Render the matched child route here */}
      </main>

      <CartOverview />
    </div>
  );
};

export default AppLayout;
