import Typography from "../Layouts/Typography"
import type { Footer_compProps } from "../Types/Alltype"



const Footercomp = ({text1,text2,img,className}: Footer_compProps) => {
  return (
    <>
    <div className="flex w-fit gap-4">
        <div className={`bg-(--darkyellow) flex-center px-3 py-3 rounded-[50px] ${className}`}>
            <img src={img} alt="" />
        </div>
        <div>
            <Typography className="text-base font-work " >{text1}</Typography>
            <Typography className="text-base font-work font-semibold" >{text2}</Typography>
        </div>
    </div>
    </>
  )}

export default Footercomp