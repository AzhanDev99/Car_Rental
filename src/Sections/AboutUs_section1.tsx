import Head_and_para from "../Components/Head_and_para"
import Typography from "../Layouts/Typography"
import { aboutContent } from "../Contants/about.content"

type Props = {}

function AboutUs_section1({}: Props) {
  const {aboutsection1} = aboutContent
  return (
<>
<div className="w-full flex flex-col sm:flex-row  gap-15 justify-between mt-10 sm:mt-28 ">
    <div>
        <Typography variant="Hero_section4-mainheading" className="hidden sm:block text-center sm:text-start">
          {aboutsection1.heading}
          </Typography>

    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <Head_and_para heading={aboutsection1.card1.heading} para={aboutsection1.card1.paragraph}/>
        <Head_and_para heading={aboutsection1.card2.heading} para={aboutsection1.card2.paragraph}/>
        <Head_and_para heading={aboutsection1.card3.heading} para={aboutsection1.card3.paragraph}/>
        <Head_and_para heading={aboutsection1.card4.heading} para={aboutsection1.card4.paragraph}/>
    </div>
</div>
</>
  )
}

export default AboutUs_section1