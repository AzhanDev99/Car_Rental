import Nav_Button from "../Components/Buttons/Vehicle_Nav_Button";
import sedan from "../assets/Sedan.svg";
import Cabriolet from "../assets/Cabriolet.svg";
import Pickup from "../assets/Pickup.svg";
import Suv from "../assets/Suv.svg";
import Minivan from "../assets/Minivan.svg";
import { ArrowBigDown } from "lucide-react";
import Typography from "../Layouts/Typography";
// import { useState } from "react";

const Vehicle_Navbar = ({activeVehicle,setActiveVehicle}:any) => {
  // const [activeVehicle, setActiveVehicle] = useState("All Vehicle");
  return (
    <>
      <div className='w-full mt-5 py-2 flex-center gap-5 flex-wrap'>
        <Nav_Button
          text='All Vehicle'
          isActive={activeVehicle === "All Vehicle"}
          onClick={() => setActiveVehicle("All Vehicle")}
        />
        <Nav_Button
          text='Sedan'
          img={sedan}
          isActive={activeVehicle === "Sedan"}
          
          onClick={() =>{
            setActiveVehicle("Sedan")}}
        />
        <Nav_Button
          text='Cabriolet'
          img={Cabriolet}
          isActive={activeVehicle === "Cabriolet"}
          onClick={() => setActiveVehicle("Cabriolet")}
        />
        <Nav_Button
          text='Pickup'
          img={Pickup}
          isActive={activeVehicle === "Pickup"}
          onClick={() => setActiveVehicle("Pickup")}
        />
        <Nav_Button
          text='Suv'
          img={Suv}
          isActive={activeVehicle === "Suv"}
          onClick={() => setActiveVehicle("Suv")}
        />
        <Nav_Button
          text='Minivan'
          img={Minivan}
          isActive={activeVehicle === "Minivan"}
          onClick={() => setActiveVehicle("Minivan")}
        />
      </div>
      <div className="text-center flex justify-center items-center gap-2 pt-10 sm:hidden"><Typography variant="Hero_section3-heading">Vehicles</Typography><ArrowBigDown></ArrowBigDown></div>
    </>
  );
};

export default Vehicle_Navbar;
