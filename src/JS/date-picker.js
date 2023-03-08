const weekdays = {
  shorthand: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
  longhand: [
    "Неділя",
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П'ятниця",
    "Субота",
  ],
};

const months = {
  shorthand: [
    "Січ",
    "Лют",
    "Бер",
    "Квіт",
    "Трав",
    "Чер",
    "Лип",
    "Сер",
    "Вер",
    "Жов",
    "Лис",
    "Гру",
  ],
  longhand: [
    "Січень",
    "Лютий",
    "Березень",
    "Квітень",
    "Травень",
    "Червень",
    "Липень",
    "Серпень",
    "Вересень",
    "Жовтень",
    "Листопад",
    "Грудень",
  ],
};

const optionsRange = {
  minuteIncrement: 1,
  mode: "range",
  minDate: "today",
  dateFormat: "d.m.Y",
  locale: {
    rangeSeparator: " до ",
    firstDayOfWeek: 1,
    weekdays: weekdays,
    months: months,
  },
};

const optionsDateTime = {
  minDate: "today",
  enableTime: true,
  dateFormat: "d.m.Y H:i",
  locale: {
    weekdays: weekdays,
    months: months,
  },
};

export { optionsRange, optionsDateTime };
