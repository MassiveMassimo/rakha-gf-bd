"use client";

import * as React from "react";
import { useRouter } from "next/navigation"; // Next.js 13+ navigation hook
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
  const router = useRouter();

  React.useEffect(() => {
    const targetDate = new Date(2003, 5, 11); // June 11th, 2003
    if (
      name.toLowerCase() === "rafienza maylla" &&
      date &&
      isEqual(date, targetDate)
    ) {
      console.log("Special user detected!");
      setIsSpecialUser(true);

      // Set auth cookie and delay redirection by 1 second
      document.cookie = "auth=true; path=/"; // Set the auth cookie
      setTimeout(() => {
        router.push("/"); // Redirect to the root route after 1 second
      }, 1000);
    } else {
      setIsSpecialUser(false);
    }
  }, [name, date, router]);

  return (
    <div
      className={cn(
        "absolute flex h-screen w-full flex-col items-center justify-center bg-white transition-transform duration-1000",
        isSpecialUser && "-translate-y-full",
      )}
    >
      <div className="w-full grow bg-gradient-to-b from-white via-white to-slate-50" />
      <form className="flex w-full space-x-4 bg-gradient-to-b from-slate-50 to-slate-100 sm:px-10 lg:px-28">
        <Input
          className="h-auto flex-1 border-none bg-transparent lg:px-8 text-xl capitalize placeholder:text-slate-400 placeholder:transition-colors hover:placeholder:text-slate-900 focus-visible:ring-transparent focus-visible:ring-offset-transparent sm:text-2xl lg:text-7xl"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"ghost"}
              className={cn(
                "h-auto flex-1 justify-start lg:px-8 text-left text-xl font-normal hover:bg-transparent focus-visible:ring-transparent focus-visible:ring-offset-transparent sm:text-2xl lg:text-7xl",
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
