
import img from "../assets/Aboutus_img2.png"
import Cardetail2 from "../Components/Cardetail2";
import Typography from "../Layouts/Typography";

type Props = {};

const AboutUs_section3 = ({}: Props) => {
  return (
    <>
      <div className='w-full h-fit sm:py-28 flex items-center flex-col sm:flex-row justify-between'>
        <div className="sm:w-[55%]">
            <Typography variant="Hero_section4-mainheading" className="leading-12 pb-5 hidden sm:block ">Unlock unforgettable <br /> memories on the road</Typography>
            <Typography variant="Hero_section4-mainheading" className="leading-8 pb-5 block sm:hidden text-center">Unlock unforgettable memories on the road</Typography>
            <Typography variant="cardetail_card_smalltext" className="whitespace-normal! text-center sm:text-start">Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper</Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
                <Cardetail2 text="Velit semper morbi. Purus non eu cursus porttitor tristique et gravida"/>
                <Cardetail2 text="Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum "/>
                <Cardetail2 text="Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor "/>
                <Cardetail2 text="Quis nunc interdum gravida ullamcorper"/>
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
