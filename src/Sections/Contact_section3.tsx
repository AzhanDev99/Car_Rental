import Contact_Comp1 from "../Components/Contact_Comp1";
import Page_Headings from "../Components/Page_Headings";
import img from "../assets/Contact_img2.png";
import Vehicle_CarBrands from "./Vehicle_CarBrands";

type Props = {};

const Contact_section3 = ({}: Props) => {
  return (
    <>
      <div className="pt-10">
        <Page_Headings text1='Latest blog posts & news' />
        <div className='flex items-center justify-between flex-col sm:flex-row  pt-10'>
          <Contact_Comp1
            img={img}
            text1='How to choose the right car'
            text2='News /'
            text3='12April 2024'
          />
          <Contact_Comp1
            img={img}
            text1='Which plan is right for me?'
            text2='News /'
            text3='12April 2024'
          />
          <Contact_Comp1
            img={img}
            text1='Enjoy Speed, Choice & Total Control'
            text2='News /'
            text3='12April 2024'
          />
        </div>
        <div className='sm:py-16'>
          <Vehicle_CarBrands />
        </div>
      </div>
    </>
  );
};

export default Contact_section3;
