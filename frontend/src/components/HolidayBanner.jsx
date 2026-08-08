import React from "react";
import calendarData from "../data/calendar.json";
import { Sparkles } from "lucide-react";

export function getActiveHoliday() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Check if today falls within any holiday range
  const activeHoliday = calendarData.holidays.find((holiday) => {
    const start = new Date(holiday.startDate);
    const end = new Date(holiday.endDate);
    start.setHours(0, 0, 0, 0);
    end.setHours(23, 59, 59, 999);
    return today >= start && today <= end;
  });

  if (activeHoliday) {
    return { name: activeHoliday.name, status: "ongoing" };
  }

  // If no active holiday, check if tomorrow is the start of one
  const upcomingHoliday = calendarData.holidays.find((holiday) => {
    const start = new Date(holiday.startDate);
    start.setHours(0, 0, 0, 0);
    return tomorrow.getTime() === start.getTime();
  });

  if (upcomingHoliday) {
    return { name: upcomingHoliday.name, status: "tomorrow" };
  }

  return null;
}

const HolidayBanner = () => {
  const holiday = getActiveHoliday();

  if (!holiday) return null;

  return (
    <div className="holiday-banner">
      <span>
        {holiday.status === "tomorrow"
          ? `Tomorrow is ${holiday.name}!`
          : `${holiday.name} is going on!`}
      </span>
    </div>
  );
};

export default HolidayBanner;
