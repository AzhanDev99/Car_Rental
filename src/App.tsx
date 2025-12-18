import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainlayout from "./Layouts/Main_Layout";
import NoNavLayout from "./Layouts/No_Nav_Layout";
import Home from "./Pages/Home";
import Vehicle from "./Pages/Vehicle";
import About_Us from "./Pages/About_Us";
import Contact_Us from "./Pages/Contact_Us";
import Details from "./Pages/Details";
import Demo from "./Pages/Demo";


const App = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route element={<Mainlayout />}>
          <Route path='/' element={<Home />}></Route>
          {/* <Route path='/vehicle' element={<Vehicle />}></Route> */}
          <Route path='/Details' element={<Details />}></Route>
          <Route path='/Aboutus' element={<About_Us />}></Route>
          <Route path='/demo' element={<Demo />}></Route>
          <Route path='/Contactus' element={<Contact_Us />}></Route>
          <Route path="/vehicle/:id" element={<Details />} />
        </Route>
        <Route element={<NoNavLayout />}>
          <Route path='/vehicle' element={<Vehicle activeVehicle={undefined} setActiveVehicle={undefined} />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
