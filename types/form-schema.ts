import * as z from "zod";

export const CreateStoreFormSchema = z.object({
  name: z
    .string({
      required_error: "Name is required!",
    })
    .min(2, { message: "Name length must be at least 2 characters!" })
    .max(100, { message: "Name length can't exceed 100 characters!" }),
  manager: z
    .string({
      required_error: "Manager name is required!",
    })
    .min(2, { message: "Manager name length must be at least 2 characters!" })
    .max(100, { message: "Manager Name length can't exceed 100 characters!" }),
  email1: z
    .string()
    .email({ message: "Invalid Email address!" })
    .min(5, { message: "Email length must be atleast 5 characters!" })
    .max(70, { message: "Email length can't exceed 70 characters!" }),
  email2: z
    .string()
    .email({ message: "Invalid Email address!" })
    .min(5, { message: "Email length must be atleast 5 characters!" })
    .max(70, { message: "Email length can't exceed 70 characters!" }),
  number1: z
    .number()
    .min(10, { message: "Invalid number!" })
    .max(10, { message: "Invalid number!" }),
  number2: z
    .number()
    .min(10, { message: "Invalid number!" })
    .max(10, { message: "Invalid number!" }),
  gstNum: z.optional(
    z.string().min(15, "Invalid GST Number!").max(15, "Invalid GST Number!")
  ),
  image: z.string({ required_error: "Image is required!" }),
  coverUrl: z.optional(z.string()),
  location: z.object({
    city: z.string({ required_error: "City is required!" }),
    state: z.string({ required_error: "State is required!" }),
  }),
  address: z.object({
    name: z
      .string({
        required_error: "Name is required!",
      })
      .min(2, { message: "Name length must be at least 2 characters!" })
      .max(100, { message: "Name length can't exceed 100 characters!" }),
    email1: z
      .string()
      .email({ message: "Email is required!" })
      .min(5, { message: "Email length must be atleast 5 characters!" })
      .max(70, { message: "Email length can't exceed 70 characters!" }),
    email2: z
      .string()
      .email({ message: "Email is required!" })
      .min(5, { message: "Email length must be atleast 5 characters!" })
      .max(70, { message: "Email length can't exceed 70 characters!" }),
    number1: z
      .number()
      .min(10, { message: "Invalid number!" })
      .max(10, { message: "Invalid number!" }),
    number2: z
      .number()
      .min(10, { message: "Invalid number!" })
      .max(10, { message: "Invalid number!" }),
    house: z.string({ required_error: "House details are required!" }),
    street: z.optional(
      z.string({
        required_error: "Street/Building details are required!",
      })
    ),
    area: z.string({ required_error: "Area details are required!" }),
    landmark: z.string({
      required_error: "Landmark details are required!",
    }),
    city: z.string({ required_error: "City details are required!" }),
    district: z.string({
      required_error: "District details are required!",
    }),
    state: z.string({ required_error: "State details are required!" }),
    country: z.string({ required_error: "Country details are required!" }),
    pincode: z
      .number({ required_error: "Pincode details are required!" })
      .min(6, { message: "Invalid Pincode!" })
      .max(6, { message: "Invalid Pincode!" }),
  }),
});
