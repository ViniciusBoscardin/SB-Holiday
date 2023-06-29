import { IHoliday } from "./types/holiday";

const baseUrl = "http://localhost:3001";

export const getHolidays = async (): Promise<IHoliday[]> => {
  const res = await fetch(`${baseUrl}/holiday`);
  const holidays = await res.json();
  console.log(holidays);
  return holidays;
};
