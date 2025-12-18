import Footercomp from "../Components/Footercomp";
import location from "../assets/location_icon.svg";
import img1 from "../assets/phoneicon.svg";
import img2 from "../assets/mail.svg";
import img3 from "../assets/clock.svg";

type Props = {};

const Contact_section2 = ({}: Props) => {
  return (
    <>
      <div className="flex items-start sm:items-center justify-between flex-col sm:flex-row my-10 gap-10 sm:my-30 ">
        <div>
          <Footercomp
            text1='Address'
            text2='Oxford Ave. Cary, NC 27511'
            img={location}
            className="px-5 py-5"
          />
        </div>
        <div>
          <Footercomp text1='Email' text2='nwiger@yahoo.com' img={img2} className="px-5 py-5"/>
        </div>
        <div>
          <Footercomp text1='Phone' text2='+537 547-6401' img={img1} className="px-5 py-5"/>
        </div>
        <div>
          <Footercomp text1='Opening hours' text2='Sun-Mon: 10am - 10pm' img={img3} className="px-5 py-5"/>
        </div>
      </div>
    </>
  );
};

export default Contact_section2;
