import Typography from "../Layouts/Typography";
import type { Head_and_paraProps } from "../Types/Alltype";

const Head_and_para = ({ heading, para }: Head_and_paraProps) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <Typography variant='cardetail_card_noramltext' className="w-full text-center sm:text-start ">{heading}</Typography>
        <Typography className="text-center sm:text-start">{para}</Typography>
      </div>
    </>
  );
};

export default Head_and_para;
