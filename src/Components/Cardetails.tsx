import Typography from "../Layouts/Typography";
import type {CardetailProps} from "../Types/Alltype"



const Cardetails = ({img,text1,text2}: CardetailProps) => {
  return (
    <>
      <div className="flex flex-col items-start gap-2 bg-(--lightwhite) w-1/2 sm:w-[30%] py-7 rounded-2xl pl-5">
        <img className="w-5" src={img} alt="" /> 
        <Typography variant="text16" className="font-semibold">{text1}</Typography>
        <Typography variant="cardetail_card_smalltext" >{text2}</Typography>
      </div>
    </>
  );
};

export default Cardetails;
