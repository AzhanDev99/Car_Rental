import toyota from "../assets/Toyotalogo.svg";
import Ford from "../assets/Fordlogo.svg";
import Mercedes from "../assets/Mercedeslogo.svg";
import Jeep from "../assets/Jeeplogo.svg";
import BMW from "../assets/BMWlogo.svg";
import Audi from "../assets/Audilogo.svg";

type Props = {};

const Vehicle_CarBrands = ({}: Props) => {
  return (
    <>
      <div className='w-full px-3 sm:px-20 py-3 pb-10'>
        <div className='w-full h-fit sm:px-15 py-10 flex-between flex-wrap px-5 rounded-4xl bg-(--lightgray) '>
          <img className='w-15 mx-5 mb-5 sm:mx-0 sm:mt-0' src={toyota} alt='' />
          <img className='w-20 mx-5 mb-5 sm:mx-0 sm:mt-0' src={Ford} alt='' />
          <img className='w-13 mx-5 mb-5 sm:mx-0 sm:mt-0' src={Mercedes} alt='' />
          <img className='w-20 mx-5 mt-5 sm:mx-0 sm:mt-0' src={Jeep} alt='' />
          <img className='w-13 mx-5 mt-5 sm:mx-0 sm:mt-0' src={BMW} alt='' />
          <img className='w-20 mx-5 mt-5 sm:mx-0 sm:mt-0' src={Audi} alt='' />
        </div>
      </div>
    </>
  );
};

export default Vehicle_CarBrands;
