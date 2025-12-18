import Page_Headings from "../Components/Page_Headings";
import Reviews_card from "../Components/Reviews_card";
import img from "../assets/Reviewsblur.png";

type Props = {};

const AboutUs_section5 = ({}: Props) => {
  return (
    <>
      <div className='mt-20 flex flex-col items-center '>
        <Page_Headings text1='Reviews from our customers'/>
        <div className="flex flex-col sm:flex-row mt-10 justify-between w-full gap-5 ">
          <Reviews_card
            img={img}
            text1='Et aliquet netus at sapien pellentesque mollis nec dignissim
              maecenas. Amet erat volutpat quisque odio purus feugiat. In
              gravida neque'
            text2='Kuphal LLC'
            text3='Emanuel Boyle'
          />
          <Reviews_card
            img={img}
            text1=' Purus consectetur varius quis urna phasellus enim mattis. Sem tincidunt tortor nunc egestas amet adipiscing ligula'
            text2='Glover - Orn'
            text3='River Graves'
          />
          <Reviews_card
            img={img}
            text1=' Quam neque odio urna euismod felis. Sit egestas magna in quisque famesdapibus quis sapien magna. Nisl non eget sit pellentesque tristique et'
            text2='Haag LLC'
            text3='Ryder Malone'
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs_section5;
