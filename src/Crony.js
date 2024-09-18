import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import cronParser from "cron-parser";
import { cdsw_frequery, e2e_freq } from "./schedules";

const localizer = momentLocalizer(moment);

const jsonData = [...cdsw_frequery, ...e2e_freq];

const Crony = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const parsedEvents = [];

    jsonData.forEach((entry) => {
      if (entry.frequency !== "none") {
        try {
          const interval = cronParser.parseExpression(entry.frequency, {
            currentDate: new Date(),
          });

          // Generate the next 5 occurrences for demo purposes
          for (let i = 0; i < 5; i++) {
            const next = interval.next().toDate();
            parsedEvents.push({
              title: entry.testset,
              start: next,
              end: moment(next).add(1, "hour").toDate(), // Assume 1-hour events
            });
          }
        } catch (err) {
          console.error("Error parsing cron expression:", err);
          console.error(entry.frequency);
        }
      }
    });
    console.log(parsedEvents);
    setEvents(parsedEvents);
  }, []);

  return (
    <div style={{ height: "500px" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="week"
        style={{ height: 800 }}
      />
      <h6>Drop down with various components (multiple select) POC!</h6>
      <h5>Check for to select all</h5>
    </div>
  );
};

export default Crony;
