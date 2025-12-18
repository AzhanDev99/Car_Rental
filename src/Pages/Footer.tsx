import Footercomp from "../Components/Footercomp";
import location from "../assets/location_icon.svg";
import mail from "../assets/mail.svg";
import phone from "../assets/phoneicon.svg";
import logo from "../assets/Logo.svg";
import Appledownlad from "../assets/Appledownload.svg";
import Googleledownlad from "../assets/GooglePlaydownload.svg";
import Facebook from "../assets/facebookicon.svg";
import Instagram from "../assets/Instagramicon.svg";
import Twitter from "../assets/Twittericon.svg";
import Youtube from "../assets/Youtubeicon.svg";
import Typography from "../Layouts/Typography";
import Footercomp2 from "../Components/Footercomp2";
import { Link } from "react-router-dom";

type Props = {};

const Footer = ({}: Props) => {
  return (
    <>
      <div className='px-3 sm:px-20 '>
        <div className='h-fit w-full '>
          {/* footertop */}
          <div className='flex flex-col sm:flex-row items-start gap-5 sm:gap-0 sm:items-center justify-between relative '>
            <img
              src={logo}
              alt=''
              className='w-[80%] sm:w-[30%] mx-auto sm:mx-0 sm:pr-10'
            />
            <div>
              <Footercomp
                text1='Address'
                text2='Oxford Ave. Cary, NC 27511'
                img={location}
              />
            </div>
            <div>
              <Footercomp
                text1='Email'
                text2='nwiger@yahoo.com'
                img={mail}
              />
            </div>
            <div>
              <Footercomp text1='Phone' text2='+537 547-6401' img={phone} />
            </div>
          </div>
          {/* footermiddle */}
          <div className='flex flex-col sm:flex-row gap-5 sm:gap-48 pt-15'>
            <div className='flex flex-col justify-between items-center sm:items-start h-fit sm:h-50 sm:w-[40%] '>
              <Typography
                variant='text14'
                className='sm:text-start text-lg! text-center font-normal! sm:font-bold! '>
                Faucibus faucibus pellentesque dictum turpis. Id pellentesque
                turpis massa a id iaculis lorem turpis...
              </Typography>
              <div className='flex gap-5 pt-5 sm:pt-0'>
                <Footercomp2 img={Facebook} width={"20%"} />
                <Footercomp2 img={Instagram} width={"50%"} />
                <Footercomp2 img={Twitter} width={"50%"} />
                <Footercomp2 img={Youtube} width={"50%"} />
              </div>
            </div>
            <div className='flex sm:w-[55%] justify-evenly sm:justify-between'>
              <div className='flex flex-col justify-between h-50'>
                <Typography variant='text14' className='whitespace-nowrap pb-7'>
                  Useful links
                </Typography>
                <Link to={"./Aboutus"}>
                  <Typography className='cursor-pointer'>About us</Typography>
                </Link>
                <Link to={"./Contactus"}>
                  <Typography className='cursor-pointer'>Contact us</Typography>
                </Link>

                <Typography>Gallery</Typography>
                <Typography>Blog</Typography>
                <Typography>F.A.Q</Typography>
              </div>
              <div className='flex flex-col justify-between h-50'>
                <Typography variant='text14' className='pb-7'>
                  Vehicles
                </Typography>
                <Link
                  to={"./Vehicle"}
                  className='h-full justify-between flex flex-col'>
                  <Typography>Sedan</Typography>
                  <Typography>Cabriolet</Typography>
                  <Typography>Pickup</Typography>
                  <Typography>Minivan</Typography>
                  <Typography>SUV</Typography>
                </Link>
              </div>
            </div>
            <div className=' sm:h-50 flex flex-col justify-between pb-10 pt-10 sm:pt-0 '>
              <Typography
                variant='text14'
                className='whitespace-nowrap text-center sm:block hidden'>
                Download App
              </Typography>
              <Typography
                variant='text14'
                className='text-4xl! text-center sm:hidden block'>
                Download App
              </Typography>
              <div className='flex sm:flex-col gap-5 pt-5 justify-center items-center'>
                <a
                  href='https://www.apple.com/itunes/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img
                    className='scale-100 hover:scale-110 transition-transform duration-200'
                    src={Appledownlad}
                    alt='Download on App Store'
                  />
                </a>

                <a
                  href='https://play.google.com/store/apps/details?id=com.google.android.gms&hl=en'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img
                    className='scale-100 hover:scale-110 duration-200 transition-all'
                    src={Googleledownlad}
                    alt=''
                  />
                </a>
              </div>
            </div>
          </div>
          {/* footerbottom */}
          <div className='flex-center mt-10'>
            <Typography variant='text15'>
              © Copyright Car Rental 2024. Design by Figma. guru
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
