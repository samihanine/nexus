"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover } from "./popover";
import { cn } from "@nexus/utils";

export function DatePickerWithRange({
  className,
  date,
  setDate,
}: React.HTMLAttributes<HTMLDivElement> & {
  date: DateRange | undefined;
  setDate: (date: DateRange | undefined) => void;
}) {
  const [openPopover, setOpenPopover] = React.useState(false);

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover
        openPopover={openPopover}
        setOpenPopover={setOpenPopover}
        align="start"
        content={
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        }
      >
        <button
          id="date"
          className={cn(
            "w-[300px] justify-start text-left font-normal border-border text-foreground",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date?.from ? (
            date.to ? (
              <>
                {format(date.from, "LLL dd, y")} -{" "}
                {format(date.to, "LLL dd, y")}
              </>
            ) : (
              format(date.from, "LLL dd, y")
            )
          ) : (
            <span>Choisissez une date</span>
          )}
        </button>
      </Popover>
    </div>
  );
}
