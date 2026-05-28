import { Outlet, useNavigation } from "react-router-dom";
import { CartOverview } from "../features";
import Header from "./Header";
import Loader from "./Loader";

const AppLayout = () => {
  const { state } = useNavigation();

  const isLoading = state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}

      <Header />

      <main>
        <Outlet /> {/* Render the matched child route here */}
      </main>

      <CartOverview />
    </div>
  );
};

export default AppLayout;
