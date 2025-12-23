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
        <div className="h-full flex flex-col sm:flex-row mt-10 justify-between items-stretch w-full gap-5">
<div className="w-full sm:w-1/3 flex">
            <Reviews_card
            img={img}
            text1={aboutsection5.review1.para}
            text2={aboutsection5.review1.company}
            text3={aboutsection5.review1.name}
          />
</div>
<div className="w-full sm:w-1/3 flex">
            <Reviews_card
            img={img}
            text1={aboutsection5.review2.para}
            text2={aboutsection5.review2.company}
            text3={aboutsection5.review2.name}
          />
</div>
<div className="w-full sm:w-1/3 flex">
            <Reviews_card
            img={img}
            text1={aboutsection5.review3.para}
            text2={aboutsection5.review3.company}
            text3={aboutsection5.review3.name}
          />
</div>
        </div>
      </div>
    </>
  );
};

export default AboutUs_section5;
