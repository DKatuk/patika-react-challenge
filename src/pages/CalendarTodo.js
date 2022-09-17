import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});


const CalendarTodo = ({ todos }) => {
  //convert todos data to calendar events data
  const calendarData = todos.map(({
    content: title,
    ...rest
  }) => ({
    title,
    ...rest
  }))

const navigate = useNavigate();
  return (
    <div className="my-10 md:flex md:justify-center transition duration-500">
      <Calendar
        localizer={localizer}
        events={calendarData}
        showAllEvents={true}
        views={["month"]}
        startAccessor="dueDate"
        endAccessor="dueDate"
        onSelectEvent={(event) => navigate(`/todo/${event.id}`)}
        style={{ height: 500, margin: "10px", color: "#7C31FF" }}
        eventPropGetter={(event) => {
          const backgroundColor = "#02EF60";
          return { style: { backgroundColor } };
        }}
      />
    </div>
  );
};

export default CalendarTodo;
