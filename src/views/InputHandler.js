import { Console } from "@woowacourse/mission-utils";
import { PROMPT_MESSAGES } from "../utils/constants.js";
import { CalendarController } from "../controllers/CalendarController.js";
import { validatePeople } from "../utils/valid/validPeople.js";

// input들을 관리하는 클래스
class InputHandler {
  async #handleInput(prompt, controllerFn) {
    while (true) {
      const result = await Console.readLineAsync(prompt);
      try {
        const returnValue = controllerFn(result); // 반환값 받음
        if (returnValue !== undefined) {
          return returnValue;
        }
        break;
      } catch (error) {
        Console.print(error.message); // 에러 메시지 출력
      }
    }
  }

  inputMonthDay() {
    return this.#handleInput(PROMPT_MESSAGES.MONTH_AND_DAY, CalendarController);
  }

  async inputWeekdayAndHolidayPeople() {
    while (true) {
      try {
        // 첫 번째 입력 (WeekdayPeopleInput)
        const WeekdayPeopleInput = await this.#handleInput(
          PROMPT_MESSAGES.WEEKDAY_PEOPLE,
          validatePeople
        );

        // 두 번째 입력 (HolidayPeopleInput)
        const HolidayPeopleInput = await this.#handleInput(
          PROMPT_MESSAGES.HOLIDAY_PEOPLE,
          validatePeople
        );

        // 유효성 검사가 통과되면 반환
        return { WeekdayPeopleInput, HolidayPeopleInput };
      } catch (error) {
        Console.print(error.message); // 에러 메시지 출력
        // 첫 번째 입력부터 다시 받도록 루프 반복
      }
    }
  }
}

export default InputHandler;
