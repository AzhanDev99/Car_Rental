import Hero_form from "../Components/Forms/Hero_form"
import img from "../assets/Contact_img1.png"

type Props = {};

const Contact_section1 = ({}: Props) => {
  return (
    <>
      <div className="h-[80vh] flex items-center justify-between flex-col sm:flex-row">
        <div className="sm:w-[35%]"><Hero_form className1="bg-(--bluemagenta) text-white" className2="bg-[#694BE3]! border-none"/></div>
        <div className="sm:w-[62%] h-[90%]  mt-10  bg- green-500 rounded-2xl overflow-hidden">
            <img className="w-full h-full" src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default Contact_section1;
