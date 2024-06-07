"use client";

import * as React from "react";
import { format, isEqual } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function AuthForm() {
  const [name, setName] = React.useState("");
  const [date, setDate] = React.useState<Date>();
  const [isSpecialUser, setIsSpecialUser] = React.useState(false);

  React.useEffect(() => {
    const targetDate = new Date(2003, 5, 11); // June 11th, 2003
    if (
      name.toLowerCase() === "rafienza maylla" &&
      date &&
      isEqual(date, targetDate)
    ) {
      console.log("Special user detected!");
      setIsSpecialUser(true);
    } else {
      setIsSpecialUser(false);
    }
  }, [name, date]);

  return (
    <div
      className={cn(
        "duration-1000 absolute flex h-screen flex-col items-center justify-center bg-white transition-transform",
        isSpecialUser && "-translate-y-full",
      )}
    >
      <div className="w-full grow bg-gradient-to-b from-white to-slate-50" />

      <form className="flex w-full space-x-4 bg-gradient-to-b from-slate-50 to-slate-100 px-28">
        <Input
          className="h-auto flex-1 border-none bg-transparent px-8 text-7xl capitalize placeholder:text-slate-400 placeholder:transition-colors hover:placeholder:text-slate-900 focus-visible:ring-transparent focus-visible:ring-offset-transparent"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"ghost"}
              className={cn(
                "h-auto flex-1 justify-start px-8 text-left text-7xl font-normal hover:bg-transparent focus-visible:ring-transparent focus-visible:ring-offset-transparent",
                !date && "text-slate-400 placeholder:transition-colors",
              )}
            >
              {date ? format(date, "PPP") : <span>Birthday</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              defaultMonth={new Date(2003, 5)}
              fromYear={2003}
              toYear={2003}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </form>
      <div className="w-full grow" />
    </div>
  );
}
