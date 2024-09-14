"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import ReactPlayer from "react-player"
import { useState } from "react"
 




const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const page = () => {

  const [urll, setUrll] = useState('')
  
   const form = useForm<z.infer<typeof FormSchema>>({
     resolver: zodResolver(FormSchema),
     defaultValues: {
       username: "",
     },
   })
  
   function onSubmit(data: z.infer<typeof FormSchema>) {
    
    console.log(data);
    setUrll(data.username)
    
   }
   return (
    <>
    
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter the url of yVideo</FormLabel>
              <FormControl>
                <Input placeholder="paste it here " {...field} />
              </FormControl>
          
              <FormMessage />
            </FormItem>
          )}
          />
        <Button type="submit">Submit</Button>
      </form>
    </Form>

<div>
  {urll&&(
    <ReactPlayer url={urll} />

  )}
</div>

          </>
  )
}

export default page