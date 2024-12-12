import ErrorHandler from "../ErrorHandler.js";
import { ERROR_MESSAGES } from "../constants.js";

export const validatePeople = (input) => {
  // 기본 유효성 검사 (쉼표로 구분된 값인지 확인)
  if (!input.includes(",")) {
    ErrorHandler.throwError(ERROR_MESSAGES.NOT_VALID);
  }

  const people = input.split(",");
  if (people.some((person) => person.trim() === "")) {
    ErrorHandler.throwError(ERROR_MESSAGES.NOT_VALID);
  }

  if (new Set(people).size !== people.length) {
    ErrorHandler.throwError(ERROR_MESSAGES.DUPLICATE);
  }

  if (people.length < 5 || people.length > 35) {
    ErrorHandler.throwError(ERROR_MESSAGES.NOT_VALID);
  }

  people.forEach((name) => {
    if (name.length > 5) ErrorHandler.throwError(ERROR_MESSAGES.NOT_VALID);
  });

  return people; // 유효한 경우 이름 배열 반환
};
