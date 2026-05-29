import { Outlet, useNavigation } from "react-router-dom";
import { CartOverview } from "../features";
import Header from "./Header";
import Loader from "./Loader";

const AppLayout = () => {
  const { state } = useNavigation();

  const isLoading = state === "loading";

  return (
    <div className="relative grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet /> {/* Render the matched child route here */}
        </main>
      </div>

      <CartOverview />
    </div>
  );
};

export default AppLayout;
