// types/index.d.ts
export interface Destination {
  id: string;
  name: string;
  image: string;
  price: number;
}

export interface Booking {
  id: string;
  userId: string;
  destinationId: string;
  date: string;
  status: "pending" | "confirmed" | "cancelled";
}

export type IconProps = {
  img?: string;
  text?: string | number;
  className?: string;
};
export type YellowbuttonProps = {
  text?: string | number;
  className?: string;
    onClick?: () => void;
  type?: "button" | "submit" | "reset";
};
export type Hero_bottom_cardProps = {
  img: string;
  heading: string;
  paragraph: string;
};

export type Hero_Section5cardProps = {
  img?: string;
  text1?: string | number;
  text2?: string;
  imgwidth?: string;
  className?:string;
};
export type Footer_compProps = {
  img: string;
  text1: string;
  text2: string;
  className?:string;
};
export type Footercomp2Props = {
  img: string;
  width: string | number;
};
export type PageHeadingProps = {
  text1: string;
  text2?: string;
  text3?: string;
};
export type Vehicle_Nav_ButtonProps = {
    text:string,
    img?:string,
};
export interface CarType {
  id: number | string;
  name: string;
  brand: string;
  fuel: string;
  carimage?:string;
  gearbox: string;
  rentPerDay: number;
  airCondition: string;
  doors: number;
  seats: number;
  category: string;
  equipments: string[];
}
export type Car_detail_cardProps ={
  id: number |string;
  name?:string,
  gearbox?:string,
    carimage?:string;
  rentperday?:number,
  aircondition?:string,
  category?:string,
  onClick?: () => void | Promise<void>;
}
export type CardetailProps = {
  img?: string;
  text1?: string;
  text2?: string |number;
};
export type Cardetail2Props = {
  text?: string;
};
export type Head_and_paraProps = {
  heading?:string;
  para?: string;
};
export type AboutUsComp1Props = {
  text1?:string;
  text2?: string;
};

