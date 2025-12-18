import Typography from "../Layouts/Typography";
import type { PageHeadingProps } from "../Types/Alltype";



const Page_Headings = ({ text1,text2,text3}: PageHeadingProps) => {
  return (
    <>
      <div className="text-center">
        <Typography variant='Hero_section4-mainheading'>
          {text1}
        </Typography>
        <Typography className="font-work font-semibold"><span className="text-black/50 ">{text2}</span> { text3}</Typography>
      </div>
    </>
  );
};

export default Page_Headings;
