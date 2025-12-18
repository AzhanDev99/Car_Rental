import type { Cardetail2Props } from "../Types/Alltype"
import Icons_background from "./Icons_background"
import tick from "../assets/Tick.svg"
import Typography from "../Layouts/Typography"


const Cardetail2 = ({text}: Cardetail2Props) => {
  return (
<div className="flex gap-4 sm:justify-center sm:items-start">
<Icons_background  img={tick}/>
<Typography variant="cardetail_card_smalltext" className="w-[80%] whitespace-normal! justify-start items-start flex">{text}</Typography>
</div>
  )
}

export default Cardetail2