import Typography from "../../Layouts/Typography";

type Props = {
  text: string;
  img?: string;
  isActive?: boolean;
  onClick?: () => void;
};

const Vehicle_Nav_Button = ({
  text,
  img,
  isActive = false,
  onClick,
}: Props) => {
  return (
    <>
      <div
        onClick={onClick}
        className={`flex-center gap-3  px-6 py-2 rounded-4xl ${
          isActive ? " text-white bg-(--bluemagenta)" : "bg-(--lightgray) text-black"
        }`}>
        <img
          src={img}
          alt=''
          className={`${isActive ? "brightness-0 invert" : ""}`}
        />
        <Typography variant='text16' className={`${isActive ? "brightness-0 invert" : ""}`}>
          {text}
        </Typography>
      </div>
    </>
  );
};

export default Vehicle_Nav_Button;
