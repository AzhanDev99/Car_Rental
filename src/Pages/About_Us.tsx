import AboutUs_section2 from "../Components/AboutUs_section2";
import Page_Headings from "../Components/Page_Headings";
import AboutUs_section1 from "../Sections/AboutUs_section1";
import AboutUs_section3 from "../Sections/AboutUs_section3";
import AboutUs_section4 from "../Sections/AboutUs_section4";
import AboutUs_section5 from "../Sections/AboutUs_section5";
import AboutUs_section6 from "../Sections/AboutUs_section6";
import AboutUs_section7 from "../Sections/AboutUs_section7";

type Props = {};

const About_Us = ({}: Props) => {
  return (
    <>
      <div className="px-3 sm:px-20">
        <Page_Headings text1='About Us' text2='Home /' text3='About Us' />
        <AboutUs_section1 />
        <AboutUs_section2 />
        <AboutUs_section3 />
        <AboutUs_section4 />
        <AboutUs_section5 />
        <AboutUs_section6 />
        <AboutUs_section7 />
      </div>
    </>
  );
};

export default About_Us;
