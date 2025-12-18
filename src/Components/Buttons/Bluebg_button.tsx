import Typography from '../../Layouts/Typography'
import type {YellowbuttonProps} from "../../Types/Alltype"


const Bluebg_button = ({text,className,type="button",onClick}: YellowbuttonProps) => {
  return (
<>
<div

className={`bg-(--bluemagenta) flex-center  h-fit w-fit font-Inter text-white px-6 py-3 rounded-2xl font-black hover:bg-black hover:border-2 hover:border-(--bluemagenta) transition-ease duration-100 cursor-pointer ${className}`}
 onClick={onClick}>
    <button type={type}><Typography>{text} </Typography></button>
</div>
</>
  )}

export default Bluebg_button