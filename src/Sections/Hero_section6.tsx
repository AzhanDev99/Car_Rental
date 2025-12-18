import Typography from "../Layouts/Typography";
import dummymobile from "../assets/Dummymobile.svg";
import Appledownload from "../assets/Appledownload.svg";
import GooglePlaydownload from "../assets/GooglePlaydownload.svg";

type Props = {};

const Hero_section6 = ({}: Props) => {
  return (
    <>
      <div className='sm:flex items-center px-3 sm:px-0 sm:pl-20 gap-30 py-10 sm:py-40'>
        <div className='gap-7 flex flex-col'>
          <Typography
            variant='Hero_section4-mainheading'
            className='leading-8 sm:leading-15 text-[30px] sm:text-[50px]'>
            Download <br /> mobile app
          </Typography>
          <Typography
            variant='cardetail_card_smalltext'
            className='hidden sm:block'>
            Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus
            <br /> turpis nibh placerat massa. Fermentum urna ut at et in.
            Turpis <br /> aliquet cras hendrerit enim condimentum. Condimentum
            interdum <br /> risus bibendum urna
          </Typography>
          <Typography
            variant='cardetail_card_smalltext'
            className=' sm:hidden block whitespace-normal!'>
            Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus
            turpis nibh placerat massa. Fermentum urna ut at et in. Turpis
            aliquet cras hendrerit enim condimentum. Condimentum interdum risus
            bibendum urna
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

        <div className='flex relative  pt-20 sm:pt-0'>
          <img src={dummymobile} alt='' className='z-10 w-[50%] sm:w-full ml-10 sm:ml-0' />
          <img
            src={dummymobile}
            alt=''
            className='absolute bottom-15 left-40 sm:left-40 z-0 w-[50%] sm:w-full'
          />
        </div>
      </div>
    </>
  );
};

export default Hero_section6;
