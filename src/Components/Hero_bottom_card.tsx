import Typography from "../Layouts/Typography";
import type {Hero_bottom_cardProps} from "../Types/Alltype"

const Hero_bottom_card = ({img, heading, paragraph }: Hero_bottom_cardProps) => {
  return (
    <>
      <div className="col-center gap-2 hover:bg-black/10 rounded-2xl py-4">
        <img className="w-14" src={img} alt='' />
        <Typography variant="Hero_bottom_heading">{heading}</Typography>
        <Typography variant="Hero_bottom_paragraph">{paragraph}</Typography>
      </div>
    </>
  );
};

export default Hero_bottom_card;
