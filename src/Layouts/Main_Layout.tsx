import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";

type Props = {}

function Main_Layout({}: Props) {
  return (
   
    <div>
        <Navbar />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>

  )}

export default Main_Layout