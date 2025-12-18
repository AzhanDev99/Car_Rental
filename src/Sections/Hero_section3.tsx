import Hero_section3_card from "../Components/Hero_section3_card";

type Props = {};

const Hero_section3 = ({}: Props) => {
  const paragraph1 =
    "Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum dui ornare praesent. Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt vulputate libero at nulla nibh quis. Quis neque donec est scelerisque lectus bibendum. Ut a a donec ante in venenatis. Risus tortor adipiscing eget enim.";
  const paragraph2 =
    "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper";
  const paragraph3 =
    "Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc luctus viverra nisi";
  const paragraph4 =
    "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt vulputate libero ";

  return (
    <>
      <div className='w-full flex-center '>
        <p className='w-[95%] text-center h-1 bg-gray-300 sm:hidden block'> </p>
      </div>
      <div className='w-full py-10 sm:py-24 flex gap-48 '>
        <div className='w-[50%] h-full bg-yellow-500 hidden sm:block'>
          <p>lorem10</p>
        </div>

        <div className='w-full sm:w-[50%] px-4 sm:px-0 gap-8 flex flex-col'>
          <Hero_section3_card
            paragraphnumber={1}
            heading='Erat at semper'
            paragraph={paragraph1}
          />
          <Hero_section3_card
            paragraphnumber={2}
            heading='Urna nec vivamus risus duis arcu'
            paragraph={paragraph2}
          />
          <Hero_section3_card
            paragraphnumber={3}
            heading='Lobortis euismod imperdiet tempus'
            paragraph={paragraph3}
          />
          <Hero_section3_card
            paragraphnumber={4}
            heading='Cras nulla aliquet nam eleifend amet et'
            paragraph={paragraph4}
          />
        </div>
      </div>

      <div className='w-full flex-center '>
        <p className='w-[95%] text-center h-1 bg-gray-300 sm:hidden block'> </p>
      </div>
    </>
  );
};

export default Hero_section3;
