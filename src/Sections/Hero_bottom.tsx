import Hero_bottom_card from "../Components/Hero_bottom_card";
import locationicon from "../assets/locationicon.svg";
import caricon from "../assets/caricon 1.svg";
import walleticon from "../assets/walleticon.svg";

const Hero_bottom = () => {
  return (
    <>
      <div className='flex flex-col sm:flex-row py-10'>
        <Hero_bottom_card
          img={locationicon}
          heading='Availability'
          paragraph='Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis'
        />
        <Hero_bottom_card
          img={caricon}
          heading='Comfort'
          paragraph='Gravida auctor fermentum morbi vulputate ac egestas orcietium convallis'
        />
        <Hero_bottom_card
          img={walleticon}
          heading='Savings'
          paragraph='Pretium convallis id diam sed commodo vestibulum lobortis volutpat'
        />
      </div>
    </>
  );
};

export default Hero_bottom;
