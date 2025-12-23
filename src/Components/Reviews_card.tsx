import Typography from "../Layouts/Typography";
// import img from "../assets/Reviewsblur.png";
import img2 from "../assets/Inverted_Commas.svg";

type Props = {
  img: string;
  text1: string;
  text2: string;
  text3: string;
};

const Reviews_card = ({ img, text1, text2, text3 }: Props) => {
  return (
    <>
      <div className='w-full h-full'>
        <div className='h-full bg-red-500 rounded-2xl overflow-hidden flex flex-col'>
          <div className='py-20 sm:py-28 grow w-full bg-(--lightgray) flex items-center justify-center text-center px-2 relative'>
            <img className='absolute top-7 left-10' src={img2} alt='' />
            <Typography
              variant='Hero_section3-heading'
              className='font-medium!'>
              {text1}
            </Typography>
          </div>
          <div className='py-12  w-full bg-(--bluemagenta) text-center justify-end flex flex-col text-white relative pb-3'>
            <img
              className='absolute -top-10 left-1/2 -translate-x-1/2'
              src={img}
              alt=''
            />
            <Typography variant='Hero-paragraph'>{text2}</Typography>
            <Typography variant='Hero_section3-heading' className='text-white'>
              {text3}
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews_card;
