import Page_Headings from "../Components/Page_Headings"
import Contact_section1 from "../Sections/Contact_section1"
import Contact_section2 from "../Sections/Contact_section2"
import Contact_section3 from "../Sections/Contact_section3"

type Props = {}

const Contact_Us = ({}: Props) => {
  return (
    <>
    <div className="px-3 sm:px-20">
      <Page_Headings text1='Contact Us' text2='Home /' text3='Contact Us' />
      <Contact_section1 />
      <Contact_section2 />
      <Contact_section3 />
      
    </div>
    </>
  )
}

export default Contact_Us
