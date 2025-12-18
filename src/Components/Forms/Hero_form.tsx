import React, { useState } from "react";
import calender_icon from "../../assets/Calender-icon.svg";
import selctarrowdown from "../../assets/selectarrowdown.svg";
import Yellowbg_button from "../Buttons/Yellowbg_button";

// type CarType = "Car1" | "Car2" | "Car3";
// type RentalPlace = "Rental1" | "Rental2" | "Rental3";
// type ReturnPlace = "AB1" | "AB2" | "AB3";
type CarBookingFormProps = {
  className1?: string;
  className2?: string;
};


const CarBookingForm: React.FC<CarBookingFormProps> = ({ className1 , className2 }) => {
  const [carType, setCarType] = useState<string>("");
  const [rentalPlace, setRentalPlace] = useState<string>("");
  const [returnPlace, setReturnPlace] = useState<string>("");
  // const [rentalDate, setRentalDate] = useState("");
  // const [returnDate, setReturnDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log({ carType, rentalPlace, returnPlace, rentalDate, returnDate });
    alert("Booking submitted! Check console for data.");
  };

  return (
    <div className={`max-w-md mx-auto p-6 rounded-lg shadow-md mt-10 ${className1}`}>
      <h2 className='text-[28px] px-20 mb-6 text-center font-semibold font-work'>
        Book your car
      </h2>

      <form onSubmit={handleSubmit} className='space-y-4'>
        {/* Car Type */}
        <div className={`w-full h-full flex border  rounded relative bg-gray-300 ${className2}`}>
          <select
            value={carType}
            onChange={(e) => setCarType(e.target.value)}
            className='w-full relative appearance-none px-5 py-2 z-10'>
            <option value='' disabled hidden>
              Car type
            </option>
            <option value='Car1'>Car1</option>
            <option value='Car2'>Car2</option>
            <option value='Car3'>Car3</option>
          </select>
          <div className='pointer-events-none absolute inset-y-0 right-3 flex items-center'>
            <img src={selctarrowdown} alt='' className='w-4 h-4 ' />
          </div>
        </div>

        {/* Place of Rental */}
        <div className={`w-full h-full flex border rounded relative bg-gray-300 ${className2}`}>
          <select
            value={rentalPlace}
            onChange={(e) => setRentalPlace(e.target.value)}
            className='w-full relative appearance-none px-5 py-2 z-10'>
            <option value='' disabled hidden>
              Place of rental
            </option>
            <option value='Rental1'>Rental1</option>
            <option value='Rental2'>Rental2</option>
            <option value='Rental3'>Rental3</option>
          </select>
          <div className='pointer-events-none absolute inset-y-0 right-3 flex items-center'>
            <img src={selctarrowdown} alt='' className='w-4 h-4 ' />
          </div>
        </div>

        {/* Place of Return */}
        <div className={`w-full h-full flex border rounded relative bg-gray-300 ${className2}`}>
          <select
            value={returnPlace}
            onChange={(e) => setReturnPlace(e.target.value)}
            className='w-full relative appearance-none px-5 py-2 z-10'>
            <option value='' disabled hidden>
              Place of return
            </option>
            <option value='AB1'>AB1</option>
            <option value='AB2'>AB2</option>
            <option value='AB3'>AB3</option>
          </select>
          <div className='pointer-events-none absolute inset-y-0 right-3 flex items-center'>
            <img src={selctarrowdown} alt='' className='w-4 h-4 ' />
          </div>
        </div>

        {/* Rental Date */}
        <div>
          {/* <label className="block text-textSecondary mb-1">Rental Date</label> */}
          {/* <div className="relative"> */}
          {/* <input
              type="date"
              value={rentalDate}
              onChange={(e) => setRentalDate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primary"
            /> */}
          {/* <img src={calender_icon} alt="" /> */}
          {/* </div> */}
          <div className={`w-full h-full flex flex-between px-4 border rounded relative py-2 bg-gray-300 ${className2}`}>
            <h1 className="">Rental date</h1>
            <img src={calender_icon} alt='' />
          </div>
        </div>

        {/* Return Date */}
        <div>
          {/* <label className='block text-textSecondary mb-1'>Return Date</label>
          <div className='relative'>
            <input
              type='date'
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className='w-full border border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primary'
            />
            <img src={calender_icon} alt='' />
          </div> */}
          <div className={`w-full h-full flex flex-between px-4 border rounded relative py-2 bg-gray-300 ${className2}`}>
            <h1>Return date</h1>
            <img src={calender_icon} alt='' />
          </div>
        </div>

        <Yellowbg_button text='Book Now' type="submit" className="w-full"/>
        {/* <button
          type='submit'
          className='w-full bg-(--darkyellow) rounded-2xl flex-center'>
        </button> */}
      </form>
    </div>
  );
};

export default CarBookingForm;
