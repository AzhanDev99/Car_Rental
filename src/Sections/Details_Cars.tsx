import Bluebg_button from "../Components/Buttons/Bluebg_button";
import Cardetails from "../Components/Cardetails";
import Typography from "../Layouts/Typography";
import carimg from "../assets/carimg.png";
import FuelIcon from "../assets/FuelIcon.svg";
import DoorIcon from "../assets/DoorIcon.svg";
import SeatIcon from "../assets/SeatIcon.svg";
import DistanceIcon from "../assets/DistanceIcon.svg";
import GearTransmission from "../assets/GearTransmission.svg";
import Cardetail2 from "../Components/Cardetail2";
import { useParams } from "react-router-dom";
import cardata from "../Data/Cardata.json";

type Props = {};

const Details_Cars = ({}: Props) => {
  const { id } = useParams<{ id: string }>();

  const car = cardata.find((item) => String(item.id) === id);

  if (!car) {
    return <div className='text-center font-bold text-3xl'>Choose Car</div>;
  }
  return (
    <>
      <div className='flex flex-col sm:flex-row  h-fit w-full'>
        <div className='sm:w-1/2 py-10'>
          <Typography
            variant='Hero_section4-mainheading'
            className='text-center sm:text-start text-4xl font-black!'>
            {car.name}
          </Typography>
          <Typography variant='text17' className='text-center sm:text-start'>
            ${car.rentPerDay}
            <span className='text-black/70 text-2xl '>/ day</span>
          </Typography>
          <img className='sm:my-4 w-full pl-5 rounded-4xl overflow-hidden' src={car.carimage} alt='' />
          <div className='w-full flex justify-between px-5'>
            <img className='w-[30%] h-30 ' src={carimg} alt='' />
            <img className='w-[30%] h-30 ' src={carimg} alt='' />
            <img className='w-[30%] h-30 ' src={carimg} alt='' />
          </div>
        </div>
        <div className='sm:w-1/2 py-14 flex flex-col gap-8 text-center sm:text-start'>
          <Typography variant='cardetail_card_noramltext'>
            Technical Specification
          </Typography>
          <div className='flex-col gap-5 pb-8 hidden sm:flex sm:my-7'>
            <div className='flex w-full justify-between px-5'>
              <Cardetails
                img={GearTransmission}
                text1='Gearbox'
                text2={car.gearbox}
              />
              <Cardetails img={FuelIcon} text1='Fuel' text2={car.fuel} />
              <Cardetails img={DoorIcon} text1='Doors' text2={car.doors} />
            </div>
            <div className='flex w-full justify-between px-5'>
              <Cardetails
                img={GearTransmission}
                text1='Air Conditioner'
                text2={car.airCondition}
              />
              <Cardetails img={SeatIcon} text1='Seats' text2={car.seats} />
              <Cardetails
                img={DistanceIcon}
                text1='Distance'
                text2={car.distance}
              />
            </div>
          </div>
          <div className='flex flex-col gap-5 pb-8 sm:hidden'>
            <div className='flex w-full justify-between  gap-3'>
              <Cardetails
                img={GearTransmission}
                text1='Gearbox'
                text2={car.gearbox}
              />
              <Cardetails img={FuelIcon} text1='Fuel' text2={car.fuel} />
            </div>
            <div className='flex w-full justify-between  gap-3'>
              <Cardetails img={DoorIcon} text1='Doors' text2={car.doors} />
              <Cardetails
                img={GearTransmission}
                text1='Air Conditioner'
                text2={car.airCondition}
              />
            </div>
            <div className='flex w-full justify-between  gap-3'>
              <Cardetails img={SeatIcon} text1='Seats' text2={car.seats} />
              <Cardetails
                img={DistanceIcon}
                text1='Distance'
                text2={car.distance}
              />
            </div>
          </div>
          <div className='flex items-center justify-center sm:items-start sm:justify-start'>
            <Bluebg_button text='Rent a car' className='px-20 ml-5 ' />
          </div>

          <div className='flex flex-col gap-10 pl-0 sm:pl-10 '>
            <Typography variant='cardetail_card_noramltext'>
              Car Equipment
            </Typography>

            <div className='flex flex-col gap-2 w-full sm:w-[65%] justify-between'>
              {car.equipments.map((equipment, index) => (
                <Cardetail2 key={index} text={equipment} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details_Cars;
