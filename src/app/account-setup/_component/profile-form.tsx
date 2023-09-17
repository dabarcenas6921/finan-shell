"use client"
import { RadioGroup, RadioGroupItem } from "~/app/@components/ui/radio-group"
import { api } from "~/trpc/react"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm} from 'react-hook-form'
import { Button } from "~/app/@components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/app/@components/ui/form"
import { Input } from "~/app/@components/ui/input"
import { redirect, useRouter } from 'next/navigation'

const formSchema = z.object({
    salary: z.any({ required_error: "You need to enter a salary! You can input 0."}),
    budget: z.any({required_error: "You haven't added a budget yet."}),
    budgetAmount: z.any({ required_error: "You need to enter a budget amount!"}),
    goals: z.any({required_error: "You need a goal!"}), 
    demographic: z.enum(["student", "professional", "early-career", "unemployed"], {
        required_error: "You need to select a demographic.",
      }),
    date: z.any({ required_error: "You need to select a date."})
  })
import { toast } from "~/app/@components/ui/use-toast"

interface ProfileProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }

export function ProfileForm() {
    const updateProfile = api.user.update.useMutation()
    const router = useRouter();
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2023, 0, 20),
    to: addDays(new Date(2023, 0, 20), 20),
  })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
        updateProfile.mutate(values)
        console.log(updateProfile)
          router.push('/dashboard')
          toast({
            title: "You successfully updated your profile!",
            description: (
              <pre className="mt-2 w-[340px] rounded-m p-4">
                <code className="text-black">Enjoy your updated tracking!</code>
              </pre>
            ),
          })
        } catch (error){
            console.log(error)
        }
        
    }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-1.5 mt-0.5">
        <FormField
          control={form.control}
          name="salary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Salary</FormLabel>
              <FormControl>
                <Input placeholder="$$$" {...field} />
              </FormControl>
              <FormDescription>
                Enter your yearly salary in $USD.
              </FormDescription>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Select dates to budgeting and saving.</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                  <Button
                    id="date"
                    variant={"outline"}
                    className={cn(
                    "w-[260px] justify-start text-left font-normal",
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
                    <span>Pick a date</span>
                    )}
                </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={(event) => {
                        field.onChange(event);
                        setDate(event);
                      }}                     
                    numberOfMonths={2}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Your date of birth is used to calculate your age.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="goals"
          render={({ field }) => (
            <FormItem>
              <FormLabel>I want to save...</FormLabel>
              <FormControl>
                <Input placeholder="$100" {...field} />
              </FormControl>
              <FormDescription>
                Enter a savings goal ($$$).
              </FormDescription>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem>
              <FormLabel>I want to budget for...</FormLabel>
              <FormControl>
                <Input placeholder="meals" {...field} />
              </FormControl>
              <FormDescription>
                Enter what you want to budget for.
              </FormDescription>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name="budgetAmount"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="$250" {...field} />
              </FormControl>
              <FormDescription>
                Enter what your budget is.
              </FormDescription>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name="demographic"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>I am a/an...</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="student" />
                    </FormControl>
                    <FormLabel className="font-normal">
                     Student
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="professional" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Professional
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="early-career" />
                    </FormControl>
                    <FormLabel className="font-normal">Early career</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="unemployed" />
                    </FormControl>
                    <FormLabel className="font-normal">Unemployed</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-1">Submit</Button>
      </form>
    </Form>
  )
}


import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { addDays, format } from "date-fns"
import { DateRange } from "react-day-picker"

import { cn } from "~/app/@utils"
import { Calendar } from "~/app/@components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/app/@components/ui/popover"
