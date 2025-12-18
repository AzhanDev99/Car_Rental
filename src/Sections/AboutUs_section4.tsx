import mobile from "../assets/Dummymobile.svg"
import apple from "../assets/App Store white bg.svg"
import Google from "../assets/Google Play white bg.svg"
import bgimg from "../assets/aboutUs _Section _bg.png"
import Typography from "../Layouts/Typography"


type Props = {}

const AboutUs_section4 = ({}: Props) => {
  return (
<>
<div className="h-fit sm:h-screen w-full flex mt-10 sm:mt-0  justify-center items-end relative overflow-hidden">
        <img className="absolute hidden sm:flex -right-10 top-50" src={bgimg} alt="" />
    <div className="bg-(--bluemagenta)  sm:h-fit py-10 sm:py-20 w-full flex flex-col sm:flex-row rounded-3xl">
    <div className="w-[40%] h-full hidden sm:block"  ></div>
    <div className="sm:w-[60%] h-full flex flex-col items-center sm:items-start z-10">
        <Typography variant="Hero-paragraph" className="uppercase text-center sm:text-start">Download our app</Typography>
        <Typography variant="Hero-heading" className="pb-10 sm:-mt-2 text-center sm:text-start uppercase sm:capitalize ">Download our app</Typography>
        <Typography variant="Hero-paragraph" className="pb-10 text-center sm:text-start">Turpis morbi enim nisi pulvinar leo dui tellus. Faucibus egestas semper diam rutrum dictumst ut donec. Nisi nisi morbi vel in vulputate. Nulla nam eget urna fusce vulputate at risus</Typography>
        <div className="flex gap-10 items-center justify-center sm sm:items-start sm:justify-normal">
            <img src={apple} alt="" />
            <img src={Google} alt="" />
        </div>
    <img className="w-[50%] sm:w-fit sm:absolute bottom-10 left-20 pt-10 sm:pt-0" src={mobile} alt="" />
    </div>
</div>
</div>
</>
  )}

export default AboutUs_section4