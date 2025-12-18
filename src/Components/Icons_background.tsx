import type { IconProps } from "../Types/Alltype";

const Icons_background = ({img , text ,className}: IconProps) => {
  return (
    <>
    <div className={`bg-(--bluemagenta) flex-center w-6 h-6 rounded-[50%] ${className}`}>       
       <div > {img && <img src={img } alt="" />}</div>
        {text && <p className="text-white text-sm">{text}</p>}
    </div>
    </>
  )}

export default Icons_background;