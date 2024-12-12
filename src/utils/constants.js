export const VALID_DAYS = ["일", "월", "화", "수", "목", "금", "토"];
export const VALID_HOLIDAYS = {
  1: 1,
  3: 1,
  5: 5,
  6: 6,
  8: 15,
  10: [3, 9],
  12: 25,
};

export const ERROR_MESSAGES = Object.freeze({
  NOT_VALID: "유효하지 않은 입력 값입니다. 다시 입력해 주세요.",
  NUMBER_ONLY: "숫자만 입력해주세요.",
  DUPLICATE: "입력값에 중복이 있습니다.",
});

export const PROMPT_MESSAGES = Object.freeze({
  MONTH_AND_DAY: "비상 근무를 배정할 월과 시작 요일을 입력하세요",
  WEEKDAY_PEOPLE: "평일 비상 근무 순번대로 사원 닉네임을 입력하세요",
  HOLIDAY_PEOPLE: "휴일 비상 근무 순번대로 사원 닉네임을 입력하세요",
});
