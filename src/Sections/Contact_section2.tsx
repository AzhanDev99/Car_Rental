import Footercomp from "../Components/Footercomp";
import location from "../assets/location_icon.svg";
import img1 from "../assets/phoneicon.svg";
import img2 from "../assets/mail.svg";
import img3 from "../assets/clock.svg";
import { Contact_content } from "../Contants/contact.content";

type Props = {};

const Contact_section2 = ({}: Props) => {
  const {contentsection2} = Contact_content
  return (
    <>
      <div className="flex items-start sm:items-center justify-between flex-col sm:flex-row my-10 gap-10 sm:my-30 ">
        <div>
          <Footercomp
            text1={contentsection2.card1.Heading}
            text2={contentsection2.card1.para}
            img={location}
            className="px-5 py-5"
          />
        </div>
        <div>
          <Footercomp text1={contentsection2.card2.Heading} text2={contentsection2.card2.para} img={img2} className="px-5 py-5"/>
        </div>
        <div>
          <Footercomp text1={contentsection2.card3.Heading} text2={contentsection2.card3.para} img={img1} className="px-5 py-5"/>
        </div>
        <div>
          <Footercomp text1={contentsection2.card4.Heading} text2={contentsection2.card4.para} img={img3} className="px-5 py-5"/>
        </div>
      </div>
    </>
  );
};

export default Contact_section2;
