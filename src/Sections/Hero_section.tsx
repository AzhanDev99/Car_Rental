import Yellowbg_button from "../Components/Buttons/Yellowbg_button";
import Hero_form from "../Components/Forms/Hero_form";
import Herocar_img from "../assets/Img.svg";
import Typography from "../Layouts/Typography";
import herobgimg from "../assets/Hero-bg.png";

type Props = {};

const Herosection = ({}: Props) => {
  return (
    <>
      <div className='bg-(--bluemagenta) pt-30 sm:pt-10 pb-15 rounded-3xl relative overflow-hidden'>
        <div className='flex flex-col sm:flex-row  justify-between sm:px-20 items-center z-10 relative'>
          <div className='flex-col gap-7 flex px-2 sm:px-0 items-center sm:items-start'>
            <Typography variant='Hero-heading' className="hidden sm:block">
              Experience the road <br /> like never before
            </Typography>
            <Typography variant='Hero-heading' className="sm:hidden uppercase text-center">
              Experience the road like never before
            </Typography>
            <Typography variant='Hero-paragraph' className="hidden sm:block">
              Aliquam adipiscing velit semper morbi. Purus non eu <br /> cursus
              porttitor tristique et gravida. Quis nunc interdum <br /> gravida
              ullamcorper
            </Typography>
            <Typography variant='Hero-paragraph' className="block sm:hidden text-center">
              Aliquam adipiscing velit semper morbi. Purus non eu cursus
              porttitor tristique et gravida. Quis nunc interdum gravida
              ullamcorper
            </Typography>
            <Yellowbg_button text='View all cars' />
          </div>
          <div className="sm:px-0 px-4">
            <Hero_form className1='bg-white' />
          </div>
        </div>

        <img src={herobgimg} alt='' className='absolute top-0 z-0' />
        <img
          src={Herocar_img}
          alt=''
          className='absolute w-[600px] sm:w-[500px] bottom-160 sm:bottom-0 right-0 sm:right-80 z-0'
        />
      </div>
    </>
  );
};

export default Herosection;
