import HeroSection5card from "../Components/Buttons/HeroSection5card"
import Typography from "../Layouts/Typography"
import caricon from "../assets/carfronticon.svg";
import customeericon from "../assets/customeericon.svg";
import calendericon from "../assets/calendar(1) 1.svg"
import miliesicon from "../assets/customeericon.svg"
import carimg from "../assets/Img (2).svg"
import section5img from "../assets/groupsection5.svg"



type Props = {}

const Here_section5 = ({}: Props) => {
  return (
    <>
    {/* <div className="h-screen w-full bg-gray-700"> */}
        <div className="col-center text-center gap-2 py-15 bg-(--bluemagenta) rounded-2xl relative z-10 overflow-hidden">
            <img src={carimg} alt="" className="absolute -z-10 -bottom-15 hidden sm:block"/>
            <img src={section5img} alt="" className="absolute -z-10 top-0 left-0 "/>
            <Typography variant="Hero_section4-mainheading" className="text-white text-3xl! pb-3 sm:pb-0">Facts In Numbers</Typography>
            <Typography variant="cardetail_card_smalltext" className="text-white hidden sm:block">Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper <br /> in. Diam tincidunt tincidunt erat at semper fermentum</Typography>
            <Typography variant="cardetail_card_smalltext" className="text-white block sm:hidden whitespace-normal! px-5">Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper  in. Diam tincidunt tincidunt erat at semper fermentum</Typography>
            <div className="flex flex-col sm:flex-row items-center justify-between px-0 sm:px-10 gap-0 sm:gap-8 pt-0 sm:pt-12">
                <HeroSection5card img={caricon} text1="540+" text2="cars" className="sm:w-[100px]!"/>
                <HeroSection5card img={customeericon} text1="20k+" text2="Customers" />
                <HeroSection5card img={calendericon} text1="25+" text2="Years" />
                <HeroSection5card img={miliesicon} text1="20m+" text2="Miles" />
            </div>
        </div>
    {/* </div>  */}
    </>
  )
}

export default Here_section5