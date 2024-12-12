import { Console } from "@woowacourse/mission-utils";

class OutputHandler {
  printResult(calendar) {
    Object.entries(calendar.finalWorkSchedule).forEach(([day, item]) => {
      Console.print(`${day} ${item.name}`);
    });
  }
}

export default OutputHandler;
