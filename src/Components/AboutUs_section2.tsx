import img from "../assets/Aboutimg1.png";
import AboutUsComp1 from "./AboutUsComp1";

type Props = {};

const AboutUs_section2 = ({}: Props) => {
  return (
    <>
      <div>
        <div className=' w-full h-[50vh] sm:h-full rounded-4xl mt-10 overflow-hidden sm:mt-28 flex-center pb-0 sm:pb-2 '>
          <img className='w-full h-full mb-20 sm:mb-0 object-cover rounded-4xl ' src={img} alt='' />
        </div>
        <div className='w-full h-fit sm:py-5 flex sm:justify-between mt-10 sm:px-20 flex-wrap items-center justify-center   '>
          <AboutUsComp1 text1='20k+' text2='Happy customers' />
          <AboutUsComp1 text1='540+' text2='Count of Cars' />
          <AboutUsComp1 text1='25+' text2='Years of experience' />
        </div>
      </div>
    </>
  );
};

export default AboutUs_section2;
