import Yellowbg_button from "../Components/Buttons/Yellowbg_button";
import Hero_form from "../Components/Forms/Hero_form";
import Herocar_img from "../assets/Img.svg";
import Typography from "../Layouts/Typography";
import herobgimg from "../assets/Hero-bg.png";
import { Home_content } from "../Contants/home.content";
import { Link } from "react-router-dom";

type Props = {};

const Herosection = ({}: Props) => {
  const { Hero } = Home_content;
  return (
    <>
      <div className='bg-(--bluemagenta) pt-30 sm:pt-10 pb-15 rounded-3xl relative overflow-hidden'>
        <div className='flex flex-col sm:flex-row  justify-between sm:px-20 items-center z-10 relative w-full '>
          <div className='flex-col gap-7 flex px-2 sm:px-0 items-center sm:items-start sm:w-[50%] w-full '>
            <Typography
              variant='Hero-heading'
              className='sm:block uppercase sm:normal-case max-sm:text-2xl!  text-center sm:text-start'>
              {Hero.heading}
            </Typography>
            <Typography
              variant='Hero-paragraph'
              className='sm:px-0 px-10 text-center sm:text-start'>
              {Hero.paragraph}
            </Typography>
            <Link to={"./Vehicle"}>
              {" "}
              <Yellowbg_button text='View all cars' />
            </Link>
          </div>
          <div className='sm:px-0 px-4'>
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
