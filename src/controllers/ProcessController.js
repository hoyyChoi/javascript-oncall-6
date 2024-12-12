export const ProcessController = (WeekdayPeople, HolidayPeople, calendar) => {
  const weekdayQueue = [...WeekdayPeople]; // 평일 근무자 순환 큐
  const holidayQueue = [...HolidayPeople]; // 주말/공휴일 근무자 순환 큐

  let previousPerson = null; // 이전 근무자의 이름

  Object.values(calendar.finalWorkSchedule).forEach((schedule) => {
    if (!schedule.holiday) {
      schedule.name = assignPerson(weekdayQueue, previousPerson);
    } else {
      schedule.name = assignPerson(holidayQueue, previousPerson);
    }
  });
};

const assignPerson = (queue, previousPerson) => {
  let person = queue.shift(); // 큐의 첫 번째 사람 가져오기
  if (person === previousPerson) {
    // 이전 사람과 겹칠 경우 다음 사람으로 교환
    const nextPerson = queue.shift();
    queue.unshift(person); // 첫 번째 사람을 앞으로 되돌리기
    person = nextPerson; // 다음 사람 선택
  }
  previousPerson = person; // 이전 사람 업데이트
  queue.push(person); // 선택된 사람을 다시 큐의 끝으로 추가
  return person;
};
