import ErrorHandler from "../ErrorHandler.js";
import { ERROR_MESSAGES, VALID_DAYS } from "../constants.js";

export const validMonthDay = (input) => {
  if (!input || !input.trim())
    ErrorHandler.throwError(ERROR_MESSAGES.NOT_VALID);

  const parts = input.split(",");
  if (parts.length !== 2) {
    ErrorHandler.throwError(ERROR_MESSAGES.NOT_VALID);
  }

  const [month, day] = parts;

  if (isNaN(Number(month))) {
    ErrorHandler.throwError(ERROR_MESSAGES.NOT_VALID);
  }

  if (Number(month) < 1 || Number(month) > 12) {
    ErrorHandler.throwError(ERROR_MESSAGES.NOT_VALID);
  }

  if (!VALID_DAYS.includes(day)) {
    ErrorHandler.throwError(ERROR_MESSAGES.NOT_VALID);
  }

  return { month, day };
};
