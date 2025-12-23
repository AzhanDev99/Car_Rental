import Seacrch from "../Components/Seacrch";
import Typography from "../Layouts/Typography";
import Car from "../assets/car(3) 1.png";
import Group6 from "../assets/Group (6).png";
import { Home_content } from "../Contants/home.content";
type Props = {};

const Hero_section7 = ({}: Props) => {
  const { HomeSection7 } = Home_content;
  return (
    <>
      <div className='h-fit w-full bg-(--bluemagenta) flex flex-col sm:flex-row items-center gap-0 sm:gap-10 relative overflow-hidden rounded-2xl mb-20 pt-10 sm:pt-0'>
        <img className='absolute top-10 -left-20' src={Group6} alt='' />
        <div className='w-full sm:w-[60%] px-8 relative gap-7 items-start flex flex-col'>
          <Typography
            variant='Hero_section4-mainheading'
            className='text-white leading-none text-center sm:text-start'>
            {HomeSection7.Heading}
          </Typography>
          <Typography
            variant='cardetail_card_smalltext'
            className='text-white whitespace-normal! w-full sm:w-[85%] text-center sm:text-start'>
            {HomeSection7.paragraph}
          </Typography>
          <div className='hidden sm:block'>
            <Seacrch />
          </div>
        </div>
        <div className='w-full flex items-center justify-center  sm:w-[40%] '>
          <img className='w-[80%]' src={Car} alt='' />
        </div>
      </div>
    </>
  );
};

export default Hero_section7;
