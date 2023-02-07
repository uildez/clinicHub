import React from "react";

//Date-fns and React-big-calendar
import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { ptBR } from "date-fns/locale";
import { filterOptions } from "../../_fakeData/DataCalendar";

//Date-fns Configuration
const locales = {
  "pt-BR": ptBR,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface EventsProps {
  filter: string;
  data?: {
    title?: string;
    allDay?: boolean | undefined;
    start?: Date;
    end?: Date;
  };
}

export const CalendarModel = ({ data, filter }: EventsProps) => {



  function handleData() {
    if (filter === "Profissionais") {
    }
  }

  handleData()

  return (
    <>
      <Calendar
        localizer={localizer}
        // events={data}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%", width: "100%" }}
        culture={"pt-BR"}
        views={{
          day: true,
          week: true,
          month: true,
        }}
        defaultView="day"
        messages={{
          next: "Próximo",
          previous: "Anterior",
          today: "Hoje",
          month: "Mês",
          week: "Semana",
          day: "Dia",
          date: "Dia",
          time: "Horário",
          event: "Evento",
          noEventsInRange: "Sem evento nessa data",
        }}
      />
    </>
  );
};
