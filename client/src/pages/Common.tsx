import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Common = () => {
  return (
    <div>
      <Navbar/>
      <div className="cinelogContainer">
        <Outlet/>
      </div>
    </div>
  )
}

export default Common