import { apiClient } from "../apiclient";
import type { CarType   } from "../../Types/Alltype";
import type { CarApiResponse  } from "../../Types/Alltype";
import { API_BASE_URL } from "../../config/apiConfig";

export const fetchCars = async (): Promise<CarType[]> => {
  const res = await apiClient<CarApiResponse>(`${API_BASE_URL}`);
  return res.Cardata;
};

export const fetchCardbyid = async (id: string): Promise<CarType | undefined> =>{
    const cars = await apiClient<CarType[]>(`${API_BASE_URL}/Cardata`);
    return cars.find(car => car.id === id);
};




