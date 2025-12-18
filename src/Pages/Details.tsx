import Details_Cars from "../Sections/Details_Cars";
import Details_section2 from "../Sections/Details_section2";

type Props = {};

const Details = ({}: Props) => {
  return (
    <>
      <div className="px-3 sm:px-20">
        <Details_Cars />
        <Details_section2 />
      </div>
    </>
  );
};

export default Details;
