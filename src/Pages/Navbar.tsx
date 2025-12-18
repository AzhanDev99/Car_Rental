import logo from "../assets/Logo.svg";
import Typography from "../Layouts/Typography";
import phoneicon from "../assets/phoneicon.svg";
import car from "../assets/car(3) 1.png";
import Icons_background from "../Components/Icons_background";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { useState } from "react";
import { Menu, X } from "lucide-react";

type Props = {};

const Navbar = ({}: Props) => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    clsx(
      "relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-(--bluemagenta) after:origin-left after:transition-transform after:duration-300 after:ease-out ",
      isActive ? "after:scale-x-105 font-bold" : "after:scale-x-0"
    );

    const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  clsx(
    "py-2 z-10 transition-colors ",
    isActive
      ? "text-white text-xl font-bold underline pl-4"
      : "text-black text-lg" 
  );

  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Desktop navbar */}
      <div className='px-0 sm:px-20 py-5 justify-between items-center hidden sm:flex'>
        <img src={logo} alt='' />
        <div className='flex gap-12 font-sans '>
          {/* home */}
          <NavLink to={"/"} className={navLinkClass}>
            <Typography className='hover:text-(--bluemagenta)'>Home</Typography>
          </NavLink>
          {/* vehicle */}
          <NavLink to={"/vehicle"} className={navLinkClass}>
            <Typography className='hover:text-(--bluemagenta)'>
              Vehicle
            </Typography>
          </NavLink>
          {/* detail */}
          <NavLink to={"/Details"} className={navLinkClass}>
            <Typography className='hover:text-(--bluemagenta)'>
              Details
            </Typography>
          </NavLink>
          {/* About */}
          <NavLink to={"/Aboutus"} className={navLinkClass}>
            <Typography className='hover:text-(--bluemagenta)'>
              About Us
            </Typography>
          </NavLink>
          {/* contact */}
          <NavLink to={"/Contactus"} className={navLinkClass}>
            <Typography className='hover:text-(--bluemagenta)'>
              Contact Us
            </Typography>
          </NavLink>
        </div>
        <div className='flex gap-3'>
          <Icons_background img={phoneicon} className='w-9 h-9' />
          <div className='leading-tight'>
            <Typography className='font-light'>Need help?</Typography>
            <Typography className='font-bold'>+996 247-1680</Typography>
          </div>
        </div>
      </div>

      {/* Mobile navbar   */}
      <div className='flex justify-between items-center sm:hidden px-4 py-4 '>
        <img src={logo} alt='logo' className='w-28' />

        <button onClick={() => setOpen(!open)} className=''>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <div
        className={clsx(
          "sm:hidden overflow-hidden transition-all duration-300  ",
          open ? "max-h-[500px]" : "max-h-0"
        )}>
        <div className='flex flex-col gap-6 px-6 py-6 bg-(--bluemagenta) text-white relative'>
          <div className='w-full h-full absolute-center '>
            <img className="opacity-70 absolute " src={car} alt='' />
          </div>
          <NavLink to='/' onClick={() => setOpen(false)} className={mobileNavLinkClass}>
            <Typography className=''>Home</Typography>
          </NavLink>

          <NavLink to='/vehicle' onClick={() => setOpen(false)} className={mobileNavLinkClass}>
            <Typography>Vehicle</Typography>
          </NavLink>

          <NavLink to='/details' onClick={() => setOpen(false)} className={mobileNavLinkClass}>
            <Typography>Details</Typography>
          </NavLink>

          <NavLink to='/aboutus' onClick={() => setOpen(false)} className={mobileNavLinkClass}>
            <Typography>About Us</Typography>
          </NavLink>

          <NavLink to='/contactus' onClick={() => setOpen(false)} className={mobileNavLinkClass}>
            <Typography>Contact Us</Typography>
          </NavLink>

          <div className='flex gap-3 pt-4 border-t'>
            <Icons_background img={phoneicon} className='w-8 h-8' />
            <div>
              <Typography className='text-sm'>Need help?</Typography>
              <Typography className='font-bold text-sm'>
                +996 247-1680
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
