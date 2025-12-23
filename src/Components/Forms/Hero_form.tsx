import React, { useState } from "react";
import selctarrowdown from "../../assets/selectarrowdown.svg";
import Yellowbg_button from "../Buttons/Yellowbg_button";

// type CarType = "Car1" | "Car2" | "Car3";
// type RentalPlace = "Rental1" | "Rental2" | "Rental3";
// type ReturnPlace = "AB1" | "AB2" | "AB3";
type CarBookingFormProps = {
  className1?: string;
  className2?: string;
};

const CarBookingForm: React.FC<CarBookingFormProps> = ({
  className1,
  className2,
}) => {
  const [carType, setCarType] = useState<string>("");
  const [rentalPlace, setRentalPlace] = useState<string>("");
  const [returnPlace, setReturnPlace] = useState<string>("");
  const [rentalDate, setRentalDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const bookingData = {
      carType,
      rentalPlace,
      returnPlace,
      rentalDate,
      returnDate,
    };

    console.log("Car Booking Data:", bookingData);

    // optional: reset form
    setCarType("");
    setRentalPlace("");
    setReturnPlace("");
    setRentalDate("");
    setReturnDate("");
    alert("Booking submitted! Check console for data.");
  };

  return (
    <div
      className={`max-w-md mx-auto p-6 rounded-lg shadow-md mt-10 ${className1}`}>
      <h2 className='text-[28px] px-20 mb-6 text-center font-semibold font-work'>
        Book your car
      </h2>

      <form onSubmit={handleSubmit} className='space-y-4'>
        {/* Car Type */}
        <div
          className={`w-full h-full flex border  rounded relative bg-gray-300 ${className2}`}>
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
        <div
          className={`w-full h-full flex border rounded relative bg-gray-300 ${className2}`}>
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
        <div
          className={`w-full h-full flex border rounded relative bg-gray-300 ${className2}`}>
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
          <label className="block text-textSecondary mb-1">Rental Date</label>
          <div
            className={`w-full h-full flex border rounded relative bg-gray-300 ${className2}`}>
            <input
              type='date'
              value={rentalDate}
              onChange={(e) => setRentalDate(e.target.value)}
              className='w-full px-5 py-2 bg-transparent outline-none'
            />
            <div className='pointer-events-none absolute inset-y-0 right-3 flex items-center'>
              {/* <img src={calender_icon} alt='' /> */}
            </div>
          </div>
        </div>

        {/* Return Date */}
        <div>
          <label className='block text-textSecondary mb-1'>Return Date</label>
          <div>
            <div
              className={`w-full h-full flex border rounded relative bg-gray-300 ${className2}`}>
              <input
                type='date'
                value={rentalDate}
                onChange={(e) => setRentalDate(e.target.value)}
                className='w-full px-5 py-2 bg-transparent outline-none'
              />
              <div className='pointer-events-none absolute inset-y-0 right-3 flex items-center'>
                {/* <img src={calender_icon} alt='' /> */}
              </div>
            </div>
          </div>
        </div>

        <Yellowbg_button text='Book Now' type='submit' className='w-full' />
      </form>
    </div>
  );
};

export default CarBookingForm;
