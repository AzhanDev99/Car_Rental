import Typography from "../Layouts/Typography";
// import cardetailimg from "../assets/Cardeatailimg.svg";
import Bluebg_button from "./Buttons/Bluebg_button";
import transmission from "../assets/GearTransmission.svg"
import Petrolicon from "../assets/Clip path group.svg"
import conditioner from "../assets/g1593.svg"
import type { Car_detail_cardProps } from "../Types/Alltype";
import { useNavigate } from "react-router-dom";


const Car_details_card = ({id,name,gearbox,rentperday,aircondition,category,carimage}: Car_detail_cardProps) => {
  const navigate = useNavigate();
  return (
    <>
      <div className='bg-[#FAFAFA] p-2 flex flex-col items-center justify-between rounded-2xl gap-8 sm:w-[30%] w-full h-fit sm:h-fit scale-100 hover:scale-105 hover:bg-black/10 hover:border transition-all duration-300 '>
        <img className='h-[30vh] sm:w-[40vw] flex-center rounded-2xl object-cover' src={carimage} alt='' />
        <div className='flex-between w-full'>
          <div>
            <Typography variant="cardetail_card_noramltext" className="whitespace-nowrap">{name}</Typography>
            <Typography variant="cardetail_card_smalltext">{category}</Typography>
          </div>
          <div>
            <h1 className="font-semibold text-[24px] font-work text-(--bluemagenta)">${rentperday}</h1>
            <Typography variant="cardetail_card_smalltext">per day</Typography>
          </div>
        </div>
        <div className='flex gap-5'>
          <div className="flex-center gap-1" ><img src={transmission} alt="" /> <Typography variant="cardetail_card_smalltext">{gearbox}</Typography></div>
          <div className="flex-center gap-1" ><img src={Petrolicon} alt="" /> <Typography variant="cardetail_card_smalltext">PB 95</Typography> </div>
          <div className="flex-center gap-1" ><img src={conditioner} alt="" /> <Typography variant="cardetail_card_smalltext">{aircondition}</Typography> </div>
        </div>
        <Bluebg_button text='View Details' className='w-full' onClick={() => navigate(`/vehicle/${id}`)}/>
      </div>
    </>
  );
};

export default Car_details_card;
