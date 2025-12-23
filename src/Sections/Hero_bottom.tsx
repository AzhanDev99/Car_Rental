import Hero_bottom_card from "../Components/Hero_bottom_card";
import locationicon from "../assets/locationicon.svg";
import caricon from "../assets/caricon 1.svg";
import walleticon from "../assets/walleticon.svg";
import { Home_content } from "../Contants/home.content";

const Hero_bottom = () => {
  const { HeroBottomContent } = Home_content;
  return (
    <>
      <div className='flex flex-col sm:flex-row py-10'>
        <Hero_bottom_card
          img={locationicon}
          heading={HeroBottomContent.card1.heading}
          paragraph={HeroBottomContent.card1.paragraph}
        />
        <Hero_bottom_card
          img={caricon}
          heading={HeroBottomContent.card2.heading}
          paragraph={HeroBottomContent.card2.paragraph}
        />
        <Hero_bottom_card
          img={walleticon}
          heading={HeroBottomContent.card3.heading}
          paragraph={HeroBottomContent.card3.paragraph}
        />
      </div>
    </>
  );
};

export default Hero_bottom;
