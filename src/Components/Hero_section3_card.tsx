import { useState } from "react";
import Typography from "../Layouts/Typography";
import Icons_background from "./Icons_background";

type Props = {
  heading?: string;
  paragraph: string;
  limit?: string;
  paragraphnumber?: number;
};

function Hero_section3_card({ paragraphnumber, heading, paragraph }: Props) {
  const [extendtext, setExtendtext] = useState(false);
  const limit = 120;

  return (
    <>

      <div className='flex flex-col items-start gap-3'>
        <div className='flex gap-3 sm:gap-7 items-center '>
          <Icons_background text={paragraphnumber} className="px-5 py-5 sm:px-0 sm:py-0"/>
          <Typography variant='Hero_section3-heading'>{heading}</Typography>
        </div>
        <Typography variant='Hero_section3-paragraph'>
          {extendtext ? paragraph : `${paragraph.slice(0, limit)}...`}
          <button
            onClick={() => setExtendtext(!extendtext)}
            className='text-(--darkyellow) font-ssemibold cursor-pointer'>
            {extendtext ? "Read Less" : "Read More"}
          </button>
        </Typography>
      </div>
    </>
  );
}

export default Hero_section3_card;
