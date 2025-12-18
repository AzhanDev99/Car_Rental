import type { Footercomp2Props } from "../Types/Alltype";


const Footercomp2 = ({img , width}: Footercomp2Props) => {
  return (
    <>
      <div className="bg-black text-white flex-center h-8 w-8 rounded-[50px] hover:bg-black/70 transition-all duration-200 border border-white scale-100 hover:scale-110 hover:text-black">
        <img style={{width:width}} src={img} alt="" />
      </div>
    </>
  );
};

export default Footercomp2;
