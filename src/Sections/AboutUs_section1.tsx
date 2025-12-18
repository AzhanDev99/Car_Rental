import Head_and_para from "../Components/Head_and_para"
import Typography from "../Layouts/Typography"


type Props = {}

function AboutUs_section1({}: Props) {
  return (
<>
<div className="w-full flex flex-col sm:flex-row  gap-15 justify-between mt-10 sm:mt-28">
    <div>
        <Typography variant="Hero_section4-mainheading" className="hidden sm:block">Where every <br /> drive feels <br />extraordinary</Typography>
        <Typography variant="Hero_section4-mainheading" className="block sm:hidden text-center" >Where every drive feels extraordinary</Typography>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <Head_and_para heading="Variety Brands" para="Platea non auctor fermentum sollicitudin. Eget adipiscing augue sit quam natoque ornare cursus viverra odio"/>
        <Head_and_para heading="Awesome Suport" para="Eget adipiscing augue sit quam natoque ornare cursus viverra odio. Diam quam gravida ultricies velit"/>
        <Head_and_para heading="Maximum Freedom" para="Diam quam gravida ultricies velit duis consequat integer. Est aliquam posuere vel rhoncus massa volutpat in"/>
        <Head_and_para heading="flexibility on the go" para="Vitae pretium nulla sed quam id nisl semper. Vel non in proin egestas dis.faucibus rhoncus. Iaculis dignissim aenean pellentesque nisl"/>
    </div>
</div>
</>
  )
}

export default AboutUs_section1