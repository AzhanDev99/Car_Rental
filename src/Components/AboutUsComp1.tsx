import Typography from '../Layouts/Typography'
import type { AboutUsComp1Props } from '../Types/Alltype'



const AboutUsComp1 = ({text1 ,text2}:AboutUsComp1Props) => {
  return (
<>
<div className='leading-12 pb-10 sm:pb-0 flex flex-col items-center justify-center px-5 sm:px-0'>
    <Typography variant='text19' className='font-bold '>{text1}</Typography>
    <Typography variant='text16' className='font-medium! sm:font-bold! text-[20px]! '>{text2}</Typography>
</div>
</>
  )
}

export default AboutUsComp1