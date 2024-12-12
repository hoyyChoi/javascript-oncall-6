import { VALID_DAYS, VALID_HOLIDAYS } from "../utils/constants.js";

export class Calendar {
  finalWorkSchedule = {};

  constructor(month, day) {
    this.processCalendar(month, day);
  }

  processCalendar(month, day) {
    const monthCount = this.monthNumber(Number(month));
    const holidays = this.seperateHoliday(month); // 10월 달 배열인데, 이거 처리해야함.
    let currentDay = day; // 현재 요일을 저장
    for (let i = 1; i <= monthCount; i++) {
      this.finalWorkSchedule[
        `${month}월 ${i}일 ${currentDay}${i === holidays ? "(휴일)" : ""}`
      ] = {
        name: "",
        holiday: this.isHoliday(currentDay, holidays, i),
      }; // 현재 요일 추가
      currentDay = this.spaceDays(currentDay); // 다음 요일로 갱신
    }
  }

  seperateHoliday(month) {
    return VALID_HOLIDAYS[month];
  }

  spaceDays(day) {
    const currentIndex = VALID_DAYS.indexOf(day); // 현재 요일의 인덱스
    const nextIndex = (currentIndex + 1) % VALID_DAYS.length; // 다음 요일 인덱스
    return VALID_DAYS[nextIndex]; // 다음 요일 반환
  }

  monthNumber(month) {
    const THIRTY_ONE_DAY_MONTHS = [1, 3, 5, 7, 8, 10, 12];
    const THIRTY_DAY_MONTHS = [4, 6, 9, 11];

    if (THIRTY_ONE_DAY_MONTHS.includes(month)) {
      return 31;
    } else if (THIRTY_DAY_MONTHS.includes(month)) {
      return 30;
    } else if (month === 2) {
      return 28;
    }
  }

  isHoliday(currentDay, holidays, day) {
    if (
      currentDay === "토" ||
      currentDay === "일" ||
      (Array.isArray(holidays) ? holidays.includes(day) : day === holidays)
    )
      return true;
    return false;
  }
}
