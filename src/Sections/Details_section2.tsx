import Car_details_card from "../Components/Car_details_card";
import rightarrowicon from "../assets/arrow-right-icon.svg";
import Typography from "../Layouts/Typography";
import cardata from "../Data/Cardata.json";
import { Link } from "react-router-dom";

type Props = {};

const Details_section2 = ({}: Props) => {
  return (
    <>
      <div className='mb-20'>
        <div className='w-full flex justify-between'>
          <Typography variant='Hero_section4-mainheading'>
            Others cars
          </Typography>
          <Link to={"/vehicle"}>
          <div className='flex gap-3 items-center cursor-pointer hover:bg-black/60 hover:p-3 transition-all duration-300 hover:text-white hover:text-xl hover:font-semibold rounded-2xl'>
            <Typography>View all </Typography>
            <img className='w-5' src={rightarrowicon} alt='' />
          </div>
          </Link>
        </div>

        <div className="flex flex-wrap justify-between px-4 gap-10 pb-10">
          {cardata.slice(0, 6).map((car) => (
            <Car_details_card
              key={car.id}
              id={car.id}
              name={car.name}
              carimage={car.carimage}
              category={car.category}
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

export default Details_section2;
