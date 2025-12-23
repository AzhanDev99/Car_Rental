import Page_Headings from "../Components/Page_Headings";
import Reviews_card from "../Components/Reviews_card";
import img from "../assets/Reviewsblur.png";
import { aboutContent } from "../Contants/about.content";

type Props = {};

const AboutUs_section5 = ({}: Props) => {
  const {aboutsection5} = aboutContent
  return (
    <>
      <div className='mt-20 flex flex-col items-center '>
        <Page_Headings text1='Reviews from our customers'/>
        <div className="flex flex-col sm:flex-row mt-10 justify-between w-full gap-5 ">
          <Reviews_card
            img={img}
            text1={aboutsection5.review1.para}
            text2={aboutsection5.review1.company}
            text3={aboutsection5.review1.name}
          />
          <Reviews_card
            img={img}
            text1={aboutsection5.review2.para}
            text2={aboutsection5.review2.company}
            text3={aboutsection5.review2.name}
          />
          <Reviews_card
            img={img}
            text1={aboutsection5.review3.para}
            text2={aboutsection5.review3.company}
            text3={aboutsection5.review3.name}
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs_section5;
