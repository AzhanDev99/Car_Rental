import Typography from '../../Layouts/Typography'
import type {YellowbuttonProps} from "../../Types/Alltype"


const Yellowbg_button = ({text,className,type="button"}: YellowbuttonProps) => {
  return (
<>
<div

className={`bg-(--darkyellow) flex-center h-fit w-fit font-Inter text-white px-6 py-3 rounded-2xl font-black hover:bg-black hover:text-(--darkyellow) hover:border-2 hover:border-(--darkyellow) transition-ease duration-200 cursor-pointer active:bg-(--bluemagenta) active:text-red-500  ${className}`}>
    <button type={type}><Typography>{text} </Typography></button>
</div>
</>
  )}

export default Yellowbg_button