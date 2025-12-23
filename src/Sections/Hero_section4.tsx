import Car_details_card from "../Components/Car_details_card";
import Typography from "../Layouts/Typography";
import rightarrowicon from "../assets/arrow-right-icon.svg";
import cardata from "../Data/Cardata.json";
import { Link } from "react-router-dom";
import type { CarType } from "../Types/Alltype";
import { Home_content } from "../Contants/home.content";
type Props = {};


const Hero_section4 = ({}: Props) => {
  const {HomeSection4} =Home_content
  return (
    <>
      <div className='py-5 w-full px-2 sm:px-0'>
        <div className='flex justify-between items-center sm:items-end'>
          <Typography variant='Hero_section4-mainheading'className=" w-[60%] sm:w-[50%] uppercase sm:normal-case max-sm:text-2xl!" >
            {HomeSection4.heading}
          </Typography>
          <Link to={"./Vehicle"}>
            <div className='flex gap-3 cursor-pointer hover:bg-black/60 hover:p-3 transition-all duration-300 hover:text-white hover:text-xl hover:font-semibold rounded-2xl'>
              <Typography>
                View all
              </Typography>
              <img src={rightarrowicon} alt='' />
            </div>
          </Link>
        </div>

        <div className='flex-center gap-5 flex-wrap pt-5'>
          {cardata.slice(0, 6).map((car:CarType) => (
            <Car_details_card
              key={car.id}
              id={car.id}
              name={car.name}
              category={car.category}
              carimage={car.carimage}
              rentperday={car.rentPerDay}
              gearbox={car.gearbox}
              aircondition={car.airCondition}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero_section4;
