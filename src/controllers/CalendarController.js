import { Calendar } from "../models/Calendar.js";
import { validMonthDay } from "../utils/valid/validMonthDay.js";

export const CalendarController = (input) => {
  const { month, day } = validMonthDay(input);
  const calendar = new Calendar(month, day);
  return calendar;
};
