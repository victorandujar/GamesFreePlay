import { Outlet } from "react-router";
import Header from "./components/Header/Header";

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
