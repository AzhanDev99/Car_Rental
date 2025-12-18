import Typography from '../../Layouts/Typography';
import type{ Hero_Section5cardProps } from "../../Types/Alltype"



const HeroSection5card = ({text1,text2,img,className}: Hero_Section5cardProps) => {
  return (
<>
<div className='bg-white pl-5 pr-20 py-4 mt-1 sm:mt-5 rounded-2xl items-start flex gap-5 w-[370px] sm:w-[25%] scale-100 hover:scale-105 transition-all duration-200'>
<img className={`bg-(--darkyellow) p-4 rounded-2xl object-cover w-[65px] ${className}`} src={img} alt="" />
<div className='flex flex-col items-start '>
    <Typography variant='cardetail_card_noramltext' className='font-bold'>{text1}</Typography>
    <Typography variant='cardetail_card_smalltext' className='font-semibold'>{text2}</Typography>
</div>
</div>
</>
  )};

export default HeroSection5card