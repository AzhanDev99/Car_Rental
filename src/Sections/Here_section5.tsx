import HeroSection5card from "../Components/Buttons/HeroSection5card"
import Typography from "../Layouts/Typography"
import caricon from "../assets/carfronticon.svg";
import customeericon from "../assets/customeericon.svg";
import calendericon from "../assets/calendar(1) 1.svg"
import miliesicon from "../assets/customeericon.svg"
import carimg from "../assets/Img (2).svg"
import section5img from "../assets/groupsection5.svg"
import { Home_content } from "../Contants/home.content";



type Props = {}

const Here_section5 = ({}: Props) => {
  const {HomeSection5} = Home_content
  return (
    <>
    {/* <div className="h-screen w-full bg-gray-700"> */}
        <div className="col-center text-center gap-2 py-15 bg-(--bluemagenta) rounded-2xl relative z-10 overflow-hidden">
            <img src={carimg} alt="" className="absolute -z-10 -bottom-15 hidden sm:block"/>
            <img src={section5img} alt="" className="absolute -z-10 top-0 left-0 "/>
            <Typography variant="Hero_section4-mainheading" className="text-white text-3xl! pb-3 sm:pb-0">{HomeSection5.heading}</Typography>
            <Typography variant="cardetail_card_smalltext" className="text-white sm:w-[60%] whitespace-normal! px-7 sm:px-0">{HomeSection5.paragraph}</Typography>
            <div className="flex flex-col sm:flex-row items-center justify-between px-0 sm:px-10 gap-0 sm:gap-8 pt-0 sm:pt-12">
                <HeroSection5card img={caricon} text1={HomeSection5.card1.heading} text2={HomeSection5.card1.text} className="sm:w-[100px]!"/>
                <HeroSection5card img={customeericon} text1={HomeSection5.card2.heading} text2={HomeSection5.card2.text} />
                <HeroSection5card img={calendericon} text1={HomeSection5.card3.heading} text2={HomeSection5.card3.text} />
                <HeroSection5card img={miliesicon} text1={HomeSection5.card4.heading} text2={HomeSection5.card4.text} />
            </div>
        </div>
    {/* </div>  */}
    </>
  )
}

export default Here_section5