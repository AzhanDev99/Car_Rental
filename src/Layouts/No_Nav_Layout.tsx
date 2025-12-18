import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer";

type Props = {}

function Main_Layout({}: Props) {
  return (
   
    <div>
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>

  )}

export default Main_Layout