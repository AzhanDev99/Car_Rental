import Contact_Comp1 from "../Components/Contact_Comp1";
import Page_Headings from "../Components/Page_Headings";
import img from "../assets/Contact_img2.png";
import Vehicle_CarBrands from "./Vehicle_CarBrands";
import { Contact_content } from "../Contants/contact.content";

type Props = {};

const Contact_section3 = ({}: Props) => {
  const {contentsection3} = Contact_content
  return (
    <>
      <div className="pt-10">
        <Page_Headings text1='Latest blog posts & news' />
        <div className='flex items-center justify-between flex-col sm:flex-row  pt-10'>
          <Contact_Comp1
            img={img}
            text1={contentsection3.text1}
            text3={contentsection3.date}
          />
          <Contact_Comp1
            img={img}
            text1={contentsection3.text2}
            text3={contentsection3.date}
          />
          <Contact_Comp1
            img={img}
            text1={contentsection3.text3}
            text3={contentsection3.date}
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
