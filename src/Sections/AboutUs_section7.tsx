import Yellowbg_button from "../Components/Buttons/Yellowbg_button";
import Typography from "../Layouts/Typography";
import Car from "../assets/Blurcarimg.png";
import Group6 from "../assets/Group (6).png";
import { aboutContent } from "../Contants/about.content";

type Props = {};

const AboutUs_section7 = ({}: Props) => {
  const {aboutsection7} = aboutContent
  return (
    <>
      <>
        <div className='mt-20 py-20 h-fit w-full bg-(--bluemagenta) flex items-center gap-10 relative overflow-hidden rounded-2xl mb-20 '>
          <img className='absolute top-10 -left-20' src={Group6} alt='' />
          <img className=' absolute w-[50%] right-0' src={Car} alt='' />
          <div className='w-full  px-8 relative gap-7 items-start flex flex-col'>
            <Typography
              variant='Hero_section4-mainheading'
              className='text-white leading-none w-[80%] sm:w-[65%]'>
              {aboutsection7.Heading}
            </Typography>
            <Typography
              variant='cardetail_card_smalltext'
              className='text-white whitespace-normal! w-[85%]'>{aboutsection7.paragraph}
            </Typography>
            <Yellowbg_button text='Shop now' />
          </div>

          <div className='w-[40%] sm:flex hidden'></div>
        </div>
      </>
    </>
  );
};

export default AboutUs_section7;
