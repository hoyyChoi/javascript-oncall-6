import { ProcessController } from "./controllers/ProcessController.js";
import InputHandler from "./views/InputHandler.js";
import OutputHandler from "./views/OutputHandler.js";

class App {
  constructor() {
    this.input = new InputHandler();
    this.output = new OutputHandler();
  }
  async run() {
    const calendar = await this.input.inputMonthDay();
    const { WeekdayPeopleInput, HolidayPeopleInput } =
      await this.input.inputWeekdayAndHolidayPeople();
    ProcessController(WeekdayPeopleInput, HolidayPeopleInput, calendar);
    this.output.printResult(calendar);
  }
}

export default App;
