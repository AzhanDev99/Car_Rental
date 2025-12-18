import Here_section5 from '../Sections/Here_section5'
import Hero_bottom from '../Sections/Hero_bottom'
import Hero_section3 from '../Sections/Hero_section3'
import Hero_section4 from '../Sections/Hero_section4'
import Hero_section6 from '../Sections/Hero_section6'
import Hero_section7 from '../Sections/Hero_section7'
import Herosection from '../Sections/Hero_section'

    

type Props = {}

const Home = ({}: Props) => {

  return (
<>
<div className='px-0 sm:px-20'>
    <Herosection /> 
    <Hero_bottom />
    <Hero_section3 />
    <Hero_section4 />
    <Here_section5 />
    <Hero_section6 />
    <Hero_section7 />

</div>
</>
  )
}

export default Home