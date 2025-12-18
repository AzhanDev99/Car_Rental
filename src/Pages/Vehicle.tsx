import Page_Headings from "../Components/Page_Headings";
import Vehicle_CarBrands from "../Sections/Vehicle_CarBrands";
import Vehicle_cars from "../Sections/Vehicle_cars";
import Vehicle_Navbar from "../Sections/Vehicle_Navbar";
import Navbar from "./Navbar";
import { useState } from "react";

type Props = {
  activeVehicle: any;
  setActiveVehicle: any;
};

const Vehicle = ({}: Props) => {
  const [activeVehicle, setActiveVehicle] = useState("All Vehicle");

  return (
    <>
    <div className="sm:hidden block"><Navbar /></div>
      <div className="pt-10">
        <Page_Headings text1='Select a vehicle group' />
        <Vehicle_Navbar
          activeVehicle={activeVehicle}
          setActiveVehicle={setActiveVehicle}
        />
        <Vehicle_cars activeVehicle={activeVehicle} />
        <div className="hidden sm:block"><Navbar /></div>
        <Vehicle_CarBrands />
      </div>
    </>
  );
};

export default Vehicle;
