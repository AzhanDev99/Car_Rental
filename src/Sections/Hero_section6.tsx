import Typography from "../Layouts/Typography";
import dummymobile from "../assets/Dummymobile.svg";
import Appledownload from "../assets/Appledownload.svg";
import GooglePlaydownload from "../assets/GooglePlaydownload.svg";
import { Home_content } from "../Contants/home.content";

type Props = {};

const Hero_section6 = ({}: Props) => {
  const {HomeSection6} = Home_content
  return (
    <>
      <div className='sm:flex items-center justify-between px-3 sm:px-0 sm:pl-20 gap-10 py-10 sm:py-40'>
        <div className='w-full sm:w-[50%] gap-7 flex flex-col justify-start'>
          <Typography
            variant='Hero_section4-mainheading'
            className='leading-8 sm:leading-15 text-[30px] sm:text-[50px] w-[60%]'>
            {HomeSection6.heading}
          </Typography>
          <Typography
            variant='cardetail_card_smalltext'
            className='whitespace-normal! pr-5 sm:pr-0 '>
            {HomeSection6.paragraph}
          </Typography>
        
          <div className='flex gap-5'>
            <a
              href='https://www.apple.com/itunes/'
              target='_blank'
              rel='noopener noreferrer'>
              <img
                className='scale-100 hover:scale-110 transition-transform duration-200'
                src={Appledownload}
                alt='Download on App Store'
              />
            </a>
            <a
              href='https://play.google.com/store/apps/details?id=com.google.android.gms&hl=en'
              target='_blank'
              rel='noopener noreferrer'>
              <img
                className='scale-100 hover:scale-110 duration-200 transition-all'
                src={GooglePlaydownload}
                alt=''
              />
            </a>
          </div>
        </div>

        <div className='flex relative pt-20 sm:pt-0 sm:w-[50%] sm:items-center sm:justify-center'>
          <img src={dummymobile} alt='' className='z-10 w-[60%] sm:w-[50%] ml-10 sm:ml-0' />
          <img
            src={dummymobile}
            alt=''
            className='absolute bottom-15 left-35 sm:left-60 z-0 w-[60%] sm:w-[50%]'
          />
        </div>
      </div>
    </>
  );
};

export default Hero_section6;
