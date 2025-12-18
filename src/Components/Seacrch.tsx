import Yellowbg_button from "./Buttons/Yellowbg_button";

type Props = {};

const Seacrch = ({}: Props) => {
  return (
    <>
      <div className="bg-white flex-between py-2 px-6 rounded-2xl gap-10 ">
        <input className="bg-white rounded-2xl py-3 px-7 w-[80%] h-full" type="text" placeholder="City"/>
        <Yellowbg_button text="Search" />
      </div>
    </>
  );
};

export default Seacrch;
