"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { CreateStoreFormSchema } from "@/types/form-schema";
import { Separator } from "../ui/separator";
import { FileField, TextField, SelectField } from "./form-feilds";
import { startTransition } from "react";

export const CreateStoreForm = () => {
  const form = useForm<z.infer<typeof CreateStoreFormSchema>>({
    resolver: zodResolver(CreateStoreFormSchema),
    defaultValues: {
      name: "",
      manager: "",
      email1: "",
      email2: "",
      // number1: "",
      // number2: "",
      gstNum: "",
      image: "",
      coverUrl: "",
      location: {
        city: "",
        state: "",
      },
      address: {
        name: "",
        email1: "",
        email2: "",
        // number1: "",
        // number2: "",
        house: "",
        street: "",
        area: "",
        landmark: "",
        city: "",
        district: "",
        state: "",
        country: "INDIA",
        // pincode: 123456,
      },
    },
  });

  const onSubmit = (values: z.infer<typeof CreateStoreFormSchema>) => {
    startTransition(() => {});
  };

  const cities = ["Udaipur"];
  const states = ["Rajasthan"];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full my-6">
        <div className="w-[350px] mx-auto">
          <FileField
            endpoint="productImage"
            label="Your Profile Image"
            desc="Select Profile Image"
            form={form}
            name="image"
          />
        </div>
        <div className="p-4 grid md:grid-cols-2 gap-x-4 gap-y-3">
          <TextField
            form={form}
            label="Store Name"
            name="name"
            plc="Store Name"
            desc="Add your store's name"
          />
          <TextField
            form={form}
            label="Store Manager"
            name="manager"
            plc="Manager/Executive's Name"
            desc="Add store manager's name"
          />
          <TextField
            form={form}
            label="Primary Email"
            name="email1"
            plc="Enter your primary email address"
          />
          <TextField
            form={form}
            label="Aternate Email"
            name="email2"
            plc="Enter your alternative email address"
          />
          <TextField
            form={form}
            label="Contact Number"
            name="number1"
            plc="Your Contact Number"
            desc="Add your primary contact number"
          />
          <TextField
            form={form}
            label="Alternate Number"
            name="number2"
            plc="Your alternate contact number"
            desc="Add your alternative contact number"
          />
          <SelectField
            form={form}
            label="Select your State"
            name="location.state"
            arr={states}
            type="State"
          />
          <SelectField
            form={form}
            label="Select your City"
            name="location.city"
            arr={cities}
            type="City"
          />
        </div>
        <h2 className="pl-4 mb-2 text-2xl font-semibold mt-4">
          Permanent Address
        </h2>
        <Separator className="w-[98%] ml-4 p-[1px] rounded bg-slate-400" />
        <div className="p-4 grid md:grid-cols-2 gap-x-4 gap-y-3">
          <TextField
            form={form}
            label="House/Flat Number"
            name="address.house"
            plc="Your alternate contact number"
          />
          <TextField
            form={form}
            label="Street/Building Name"
            name="address.street"
            plc="Address line 2"
          />
          <TextField
            form={form}
            label="Area/Colony Name"
            name="address.area"
            plc="Your area/colony/society name"
          />
          <TextField
            form={form}
            label="Landmark"
            name="address.landmark"
            plc="Landmark near your home"
            desc="Optional"
          />
          <SelectField
            form={form}
            label="Select your State"
            name="address.state"
            arr={states}
            type="State"
          />
          <SelectField
            form={form}
            label="Select your City"
            name="address.city"
            arr={cities}
            type="City"
          />
          <TextField
            form={form}
            label="District"
            name="address.district"
            plc="Your district"
          />
          <TextField
            form={form}
            label="Pincode"
            name="address.pincode"
            plc="Your pincode"
          />
        </div>
        <Button
          variant={"primary"}
          size={"lg"}
          type="submit"
          className="block hover:opacity-75 mt-4 mx-auto px-14"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};
