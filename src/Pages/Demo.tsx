import { fetchCars } from "../services_api/sources/mockCarApi";
import { useEffect, useState } from "react";
import type { CarType } from "../Types/Alltype";

type Props = {};

const Demo = ({}: Props) => {
  const [cars, setCars] = useState<CarType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCars = async () => {
      try {
        const data = await fetchCars();
        setCars(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getCars();
  }, []);

  if (loading) return <div>Loading...</div>;

console.log("helllo")

  return (
    <div className='h-screen w-full bg-red-200'>
      {cars.map((car) => (
        <div key={car.id}>{car.name}</div>
      ))}
    </div>
  );
};

export default Demo;
