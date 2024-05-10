import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
//import Banner from "./components/Banner";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Outlet />
      {/* about */}
    </>
  );
}

export default App;
