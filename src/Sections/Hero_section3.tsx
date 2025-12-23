import Hero_section3_card from "../Components/Hero_section3_card";
import { Home_content } from "../Contants/home.content";
import Car from "../assets/car(3) 1.png";


type Props = {};

const Hero_section3 = ({}: Props) => {

  const {HomeSection3} = Home_content
  return (
    <>
      <div className='w-full flex-center '>
        <p className='w-[95%] text-center h-1 bg-gray-300 sm:hidden block'> </p>
      </div>
      <div className='w-full py-15 sm:py-24 flex gap-48 '>
        <div className='w-[50%] h-full bg-(--bluemagenta) py-10 rounded-3xl items-center justify-center hidden sm:flex'>
          <img className='w-[80%] hidden sm:block ' src={Car} alt='' />
        </div>

        <div className='w-full sm:w-[50%] px-4 sm:px-0 gap-8 flex flex-col'>
          <Hero_section3_card
            paragraphnumber={1}
            heading={HomeSection3.heading1}
            paragraph={HomeSection3.paragraph1}
          />
          <Hero_section3_card
            paragraphnumber={2}
            heading={HomeSection3.heading2}
            paragraph={HomeSection3.paragraph2}
          />
          <Hero_section3_card
            paragraphnumber={3}
            heading={HomeSection3.heading3}
            paragraph={HomeSection3.paragraph3}
          />
          <Hero_section3_card
            paragraphnumber={4}
            heading={HomeSection3.heading4}
            paragraph={HomeSection3.paragraph4}
          />
        </div>
      </div>

      <div className='w-full flex-center '>
        <p className='w-[95%] text-center h-1 bg-gray-300 sm:hidden block'> </p>
      </div>
    </>
  );
};

export default Hero_section3;
