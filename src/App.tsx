import RouterView from "@/router";
import "./app.scss";
import TopBar from "./components/TopBar";

const App: React.FC = () => {
  return (
    <>
      <TopBar num={1} />
      <RouterView />
    </>
  );
};

export default App;
