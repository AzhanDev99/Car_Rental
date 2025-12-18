import Car_details_card from "../Components/Car_details_card";
import cardata from "../Data/Cardata.json";

function Vehicle_cars({ activeVehicle }: any) {
  const filteredCars =
    activeVehicle === "All Vehicle"
      ? cardata
      : cardata.filter((car) => car.category === activeVehicle);
  return (
    <>
      <div className='flex-center gap-5 flex-wrap pt-5 mb-20'>
        {filteredCars.map((car) => (
          <Car_details_card
            key={car.id}
            id={car.id}
            name={car.name}
            category={car.category}
            rentperday={car.rentPerDay}
            gearbox={car.gearbox}
            aircondition={car.airCondition}
          />
        ))}
      </div>
    </>
  );
}

export default Vehicle_cars;
