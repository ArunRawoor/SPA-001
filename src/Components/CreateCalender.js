/*import React from 'react'

export default function CreateCalendar() {
    const calendar = document.getElementById("calendar");

  // Get current date
  const currentDate = new Date();

  // Set the calendar header
  const calendarHeader = document.createElement("div");
  calendarHeader.classList.add("header");
  calendarHeader.textContent = currentDate.toLocaleString("default", { month: "long", year: "numeric" });
  calendar.appendChild(calendarHeader);

  // Create weekday labels
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  weekdays.forEach((weekday) => {
    const weekdayLabel = document.createElement("div");
    weekdayLabel.classList.add("weekday");
    weekdayLabel.textContent = weekday;
    calendar.appendChild(weekdayLabel);
  });

  // Calculate the number of days in the current month
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Create day cells
  for (let day = 1; day <= daysInMonth; day++) {
    const dayCell = document.createElement("div");
    dayCell.classList.add("day");
    dayCell.textContent = day;
    calendar.appendChild(dayCell);
  }

  // Add event to a specific day (e.g., 15th of the month)
  const eventDay = 15;
  const eventCell = calendar.querySelector(`.day:nth-child(${eventDay + 7})`);
  const eventDiv = document.createElement("div");
  eventDiv.classList.add("event");
  eventDiv.textContent = "Event";
  eventCell.appendChild(eventDiv);


  return (
    <div id="calendar"></div>
  )
}
*/