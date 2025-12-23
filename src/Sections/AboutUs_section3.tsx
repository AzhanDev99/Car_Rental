
import img from "../assets/Aboutus_img2.png"
import Cardetail2 from "../Components/Cardetail2";
import Typography from "../Layouts/Typography";
import { aboutContent } from "../Contants/about.content";

type Props = {};

const AboutUs_section3 = ({}: Props) => {
  const {aboutsection3} = aboutContent
  return (
    <>
      <div className='w-full h-fit sm:py-28 flex items-center flex-col sm:flex-row justify-between'>
        <div className="sm:w-[55%]">
            <Typography variant="Hero_section4-mainheading" className="sm:leading-12 pb-5 text-center sm:text-start leading-8">{aboutsection3.Heading}</Typography>
            <Typography variant="cardetail_card_smalltext" className="whitespace-normal! text-center sm:text-start">{aboutsection3.paragraph}</Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
                <Cardetail2 text={aboutsection3.text1}/>
                <Cardetail2 text={aboutsection3.text2}/>
                <Cardetail2 text={aboutsection3.text3}/>
                <Cardetail2 text={aboutsection3.text4}/>
            </div>
        </div>
        <div className="sm:w-[40%] pt-5 sm:pt-0">
            <img src={img} alt="" />
        </div>  
        
      </div>
    </>
  );
};

export default AboutUs_section3;
