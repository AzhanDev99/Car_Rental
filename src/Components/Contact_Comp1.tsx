import Typography from "../Layouts/Typography";


type Props = {
  img?: string;
  text1?: string;
  text2?: string;
  text3?: string;
};

const Contact_Comp1 = ({ img, text1, text2, text3 }: Props) => {
  return (
    <>
      <div className="sm:w-[32%] flex flex-col gap-4">
        <img src={img} alt='' />
        <Typography variant="Hero_section3-heading" className="text-center sm:text-start -mt-5 sm:mt-0">{text1}</Typography>
        <div className='flex items-center sm:text-start sm:justify-start justify-center -mt-4 mb-5'>
          <Typography variant="cardetail_card_smalltext" >{text2}</Typography>
          <Typography variant="cardetail_card_smalltext">{text3}</Typography>
        </div>
      </div>
    </>
  );
};

export default Contact_Comp1;
