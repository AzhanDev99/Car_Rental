import img from "../assets/Aboutimg1.png";
import AboutUsComp1 from "./AboutUsComp1";
import { aboutContent } from "../Contants/about.content";

type Props = {};

const AboutUs_section2 = ({}: Props) => {
  const {aboutsection2} = aboutContent
  return (
    <>
      <div>
        <div className=' w-full h-[50vh] sm:h-full rounded-4xl mt-10 overflow-hidden sm:mt-28 flex-center pb-0 sm:pb-2 '>
          <img className='w-full h-full mb-20 sm:mb-0 object-cover rounded-4xl ' src={img} alt='' />
        </div>
        <div className='w-full h-fit sm:py-5 flex sm:justify-between mt-10 sm:px-20 flex-wrap items-center justify-center   '>
          <AboutUsComp1 text1={aboutsection2.card1.Heading} text2={aboutsection2.card1.paragraph} />
          <AboutUsComp1 text1={aboutsection2.card2.Heading} text2={aboutsection2.card2.paragraph} />
          <AboutUsComp1 text1={aboutsection2.card3.Heading} text2={aboutsection2.card3.paragraph} />
        </div>
      </div>
    </>
  );
};

export default AboutUs_section2;
